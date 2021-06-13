import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from 'core/actions/board';
import { fetchTeams } from 'core/actions/team';
import { Link } from 'react-router-dom';
import theme from 'theme';
import { selectUserDataState } from 'core/selectors/user';

const Bookmarks = () => {
  const [search, setSearch] = useState('');
  const [selectedBookMarks, setSelectedBookMarks] = useState('');
  const currentUser = useSelector(selectUserDataState);
  const bookmarks = ['Team', 'Project', 'Board'];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
    dispatch(fetchTeams());
  }, [dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectedBookMarks = (e: any) => {
    setSelectedBookMarks(e.target.value);
  };

  return (
    <Box padding="40px">
      <Box>
        <Typography variant="h4">Bookmarks</Typography>
        <Box marginTop="20px">
          <FormControl size="small" variant="outlined">
            <OutlinedInput
              value={search}
              onChange={handleSearch}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Select
            variant="outlined"
            value={selectedBookMarks}
            onChange={handleSelectedBookMarks}
            displayEmpty
            style={{
              backgroundColor: 'white',
              height: '40px',
              color: 'gray',
              marginLeft: '20px',
            }}
          >
            <MenuItem value="">All bookmarks</MenuItem>
            {bookmarks.map((bookmark) => (
              <MenuItem key={bookmark} value={bookmark}>
                {bookmark}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box marginTop="20px">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Creator</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUser?.bookmarks
                .filter((bookmark) =>
                  selectedBookMarks ? bookmark.type === selectedBookMarks.toLowerCase() : bookmark
                )
                .filter((bookmark) => bookmark.name.toLowerCase().includes(search.toLowerCase()))
                .map((bookmark) => (
                  <TableRow key={bookmark.name}>
                    <TableCell align="center">
                      <Link
                        to={`/${bookmark.type}s/${bookmark.id}`}
                        style={{
                          textDecoration: 'none',
                          color: theme.palette.primary.main,
                        }}
                      >
                        {bookmark.name}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{bookmark.type}</TableCell>
                    <TableCell align="center">{bookmark.creator}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Bookmarks;
