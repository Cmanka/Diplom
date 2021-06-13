import {
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  addBoard as addBoardAction,
  fetchBoards,
  removeBoard,
} from 'core/actions/board';
import Loading from 'core/components/Loading';
import { IBoard } from 'core/interfaces/IBoard';
import { selectBoards, selectBoardsLoading } from 'core/selectors/boards';
import { selectUserDataState } from 'core/selectors/user';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TitleBlock,
  MyContainer,
  GridContainer,
  TitleText,
  MyPaper,
  CardActionBlock,
} from './styled';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ForwardIcon from '@material-ui/icons/Forward';
import CreateBoard from 'core/components/Dialogs/CreateBoard';
import { IBookmark } from 'core/interfaces/IBookmark';
import { IUser } from 'core/interfaces/IUser';
import { userProfileUpdate } from 'core/actions/user';

const Boards = memo(() => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUserDataState);
  const boards = useSelector(selectBoards);
  const boardsIsLoading = useSelector(selectBoardsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickOnBookmark = (board: IBoard) => {
    const bookmark: IBookmark = {
      id: board.id,
      name: board.title,
      type: 'board',
      creator: `${board.creator.firstName} ${board.creator.lastName}`,
    };

    const isFav = [...user.bookmarks].some((bm) => bm.id === bookmark.id);

    const changedUser: IUser = {
      ...user,
      bookmarks: isFav
        ? [...user.bookmarks.filter((bm) => bm.id !== bookmark.id)]
        : [...user.bookmarks, bookmark],
    };

    dispatch(userProfileUpdate(changedUser));
  };

  const onRemoveClick = (boardId: string) => {
    dispatch(removeBoard(boardId));
  };

  const onAddBoard = (board: IBoard) => {
    dispatch(addBoardAction(board));
  };

  return (
    <MyContainer fixed>
      <TitleBlock>
        <Typography variant="h3" component="div">
          Boards page
          <TitleText variant="subtitle1">
            on this page you can select and create boards
            <IconButton color="primary" onClick={handleClickOpen} size="small">
              <AddCircleIcon />
            </IconButton>
            {boards.length ? null : (
              <Typography color="textSecondary" variant="caption">
                List is empty
              </Typography>
            )}
          </TitleText>
        </Typography>
        <CreateBoard
          handleClose={handleClose}
          open={open}
          user={user}
          onAddBoard={onAddBoard}
        />
      </TitleBlock>

      {boardsIsLoading ? (
        <Loading position="absolute" />
      ) : boards.length ? (
        <MyPaper elevation={10}>
          <GridContainer container spacing={3}>
            {boards.map((board, ind) => (
              <Grid item xs={4} key={ind}>
                <Card
                  style={{
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: board.backgroundColor,
                    border: '1px solid black',
                  }}
                >
                  <CardHeader
                    action={
                      <IconButton
                        size="small"
                        style={{
                          color: 'black',
                          border: '1px solid #00000036',
                          backgroundColor: 'white',
                        }}
                        onClick={() => onRemoveClick(board.id)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    }
                    title={
                      <span
                        style={{
                          WebkitTextStroke: '1px black',
                          color: 'white',
                          fontSize: '40px',
                        }}
                      >
                        {board.title}
                      </span>
                    }
                  />
                  <CardActionBlock>
                    <IconButton
                      onClick={() => clickOnBookmark(board)}
                      size="small"
                      style={{
                        border: '1px solid #00000036',
                        backgroundColor: 'white',
                      }}
                      color={
                        user.bookmarks.some(
                          (bookmark) => bookmark.id === board.id
                        )
                          ? 'primary'
                          : 'default'
                      }
                    >
                      <BookmarkIcon />
                    </IconButton>
                    <Link
                      to={`/boards/${board.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <IconButton
                        size="small"
                        style={{
                          border: '1px solid #00000036',
                          backgroundColor: 'white',
                          color: 'black',
                        }}
                      >
                        <ForwardIcon />
                      </IconButton>
                    </Link>
                  </CardActionBlock>
                </Card>
              </Grid>
            ))}
          </GridContainer>
        </MyPaper>
      ) : null}
    </MyContainer>
  );
});

export default Boards;
