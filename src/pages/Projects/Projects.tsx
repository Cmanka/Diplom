import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CreateProject from 'core/components/Dialogs/CreateProject';
import { IProject } from 'core/interfaces/IProject';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDataState, selectUserLoadingState } from 'core/selectors/user';
import { addProject, fetchProjects } from 'core/actions/project';
import { selectProjects, selectProjectsLoading } from 'core/selectors/project';
import { Link } from 'react-router-dom';
import theme from 'theme';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { IBookmark } from 'core/interfaces/IBookmark';
import { IUser } from 'core/interfaces/IUser';
import { userProfileUpdate } from 'core/actions/user';
import Loading from 'core/components/Loading';

const Projects = () => {
  const [textField, setTextField] = useState('');
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(selectUserDataState);
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const isLoading = useSelector(selectProjectsLoading);
  const isLoadingUser = useSelector(selectUserLoadingState);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleTextField = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTextField(e.target.value);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddProject = (project: IProject) => {
    dispatch(addProject(project));
  };

  const onChangeProject = (project: IProject) => {
    const bookmark: IBookmark = {
      id: project.id,
      name: project.name,
      type: 'project',
      creator: `${project.creator.firstName} ${project.creator.lastName}`,
    };

    const isFav = [...currentUser.bookmarks].some((bm) => bm.id === bookmark.id);

    const changedUser: IUser = {
      ...currentUser,
      bookmarks: isFav
        ? [...currentUser.bookmarks.filter((bm) => bm.id !== bookmark.id)]
        : [...currentUser.bookmarks, bookmark],
    };

    dispatch(userProfileUpdate(changedUser));
  };

  return (
    <Box padding="40px">
      <CreateProject open={open} handleClose={handleClose} user={currentUser} onAddProject={onAddProject} />
      <div>
        <Typography variant="h4">Projects</Typography>
        <Box display="flex" alignItems="flex-end">
          <FormControl style={{ marginTop: '20px' }} size="small" variant="outlined">
            <OutlinedInput
              value={textField}
              onChange={handleTextField}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            style={{ marginLeft: '20px' }}
            size="medium"
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
          >
            Create new project
          </Button>
        </Box>
      </div>
      <Box marginTop="20px">
        {isLoading || isLoadingUser ? (
          <Loading position="absolute" />
        ) : (
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Date create</TableCell>
                  <TableCell align="center">Creator</TableCell>
                  <TableCell align="center">Boards count</TableCell>
                  <TableCell align="center">Teams count</TableCell>
                  <TableCell align="center">Users count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects
                  .filter((project) => project.name.toLowerCase().includes(textField.toLowerCase()))
                  .map((project) => (
                    <TableRow key={project.id}>
                      <TableCell width="1%">
                        <IconButton
                          onClick={() => onChangeProject(project)}
                          size="small"
                          color={
                            currentUser?.bookmarks.some((bookmark) => bookmark.id === project.id)
                              ? 'primary'
                              : 'default'
                          }
                        >
                          <BookmarkIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <Link
                          to={`/projects/${project.id}`}
                          style={{
                            textDecoration: 'none',
                            color: theme.palette.primary.main,
                          }}
                        >
                          {project.name}
                        </Link>
                      </TableCell>
                      <TableCell align="center">{project.dateCreate}</TableCell>
                      <TableCell align="center">{`${project.creator.firstName} ${project.creator.lastName}`}</TableCell>
                      <TableCell align="center">{project.boards.length}</TableCell>
                      <TableCell align="center">{project.teams.length}</TableCell>
                      <TableCell align="center">{project.users.length}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
