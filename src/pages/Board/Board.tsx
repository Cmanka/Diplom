import Board from 'react-trello';
import { BoardProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardById } from 'core/selectors/boards';
import { Grid, Typography, Paper, IconButton, InputBase, Divider, Avatar, Box, TextField } from '@material-ui/core';
import { ColorButton, GridContainer, TitleBlock } from './styled';
import { changeBoard } from 'core/actions/board';
import { ICard } from 'core/interfaces/ICard';
import { ChangeEvent, memo, useEffect, useState } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { IBoard } from 'core/interfaces/IBoard';
import { format } from 'date-fns';
import { selectUserDataState } from 'core/selectors/user';
import { SketchPicker } from 'react-color';

const BoardComponent = memo(({ match }: BoardProps) => {
  const board = useSelector(selectBoardById(match.params.id));
  const [comment, setComment] = useState('');
  const [color, setColor] = useState(board.backgroundColor);
  const [boardName, setBoardName] = useState(board.title);
  const [focusBoardName, setFocusBoardName] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUserDataState);

  useEffect(() => {
    const section = document.querySelectorAll('section');
    const button = document.querySelectorAll('button');
    section[section.length - 1].style.backgroundColor = '#e3e3e3';
    button[button.length - 2].style.backgroundColor = '#e3e3e3';
    button[button.length - 2].style.color = '#393939';
  });

  const handleChangeColor = (formColor: any) => {
    setColor(formColor.hex);
  };

  const onLaneAdd = (params: any) => {
    board.lanes.push({
      id: params.id,
      title: params.title ? params.title : 'title',
      cards: [],
    });
    dispatch(changeBoard(board));
  };

  const onLaneRemove = (laneId: string) => {
    board.lanes = board.lanes.filter((lane) => lane.id !== laneId);

    dispatch(changeBoard(board));
  };

  const onCardAdd = (card: ICard, laneId: string) => {
    board.lanes.find((lane) => lane.id === laneId).cards.push(card);
    dispatch(changeBoard(board));
  };

  const onCardRemove = (cardId: string, laneId: string) => {
    board.lanes.find((lane) => lane.id === laneId).cards = board.lanes
      .find((lane) => lane.id === laneId)
      .cards.filter((card) => card.id !== cardId);

    dispatch(changeBoard(board));
  };

  const onCardMoveAcrossLanes = (fromLaneId: string, toLaneId: string, cardId: string, index: number) => {
    const card = board.lanes.find((lane) => lane.id === fromLaneId).cards.find((card) => card.id === cardId);

    board.lanes = board.lanes.map((lane) => {
      if (lane.id === fromLaneId) {
        lane.cards = lane.cards.filter((card) => card.id !== cardId);
      }
      if (lane.id === toLaneId) {
        lane.cards.splice(index, 0, card);
      }
      return lane;
    });

    dispatch(changeBoard(board));
  };

  const handleChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const clearCommentInput = () => {
    setComment('');
  };

  const addComment = () => {
    const changedBoard: IBoard = {
      ...board,
      comments: [
        ...board.comments,
        {
          id: Date.now().toString(),
          text: comment,
          dateCreate: format(new Date(), 'dd MMM yyyy HH:mm'),
          user,
        },
      ],
    };

    dispatch(changeBoard(changedBoard));
    setComment('');
  };

  const clearComment = (commentId: string) => {
    const changedBoard: IBoard = {
      ...board,
      comments: [...board.comments.filter((comment) => comment.id !== commentId)],
    };
    dispatch(changeBoard(changedBoard));
  };

  const onClickDoneBoardName = () => {
    const changedBoard: IBoard = { ...board, title: boardName };
    dispatch(changeBoard(changedBoard));
    setFocusBoardName(false);
  };

  const onClickClearBoardName = () => {
    setFocusBoardName(false);
    setBoardName(board.title);
  };

  const onClickUpdateColor = () => {
    dispatch(changeBoard({ ...board, backgroundColor: color }));
  };

  return (
    <GridContainer container spacing={3}>
      <Grid item xs={2}>
        <Paper elevation={5} style={{ boxSizing: 'border-box', padding: '20px' }}>
          <TitleBlock>
            <Box display="flex" justifyContent="space-between" alignItems="flex-end" marginBottom="10px">
              <Typography variant="body1" component="p">
                {board.creator.email}
              </Typography>
              <Typography variant="body2" component="p">
                {board.dateCreate}
              </Typography>
            </Box>

            <div>
              <Typography style={{ color: 'gray' }} variant="body2" component="p">
                {board.description}
              </Typography>
            </div>
          </TitleBlock>
          <hr />
          {board.comments.map((comment) => (
            <Paper
              key={comment.id}
              style={{
                display: 'flex',
                padding: '10px',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                marginTop: '10px',
                flexDirection: 'column',
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Avatar>{`${comment.user.firstName[0]}${comment.user.lastName[0]}`}</Avatar>
                  <Typography style={{ wordBreak: 'break-all', marginLeft: '5px' }}>{comment.text}</Typography>
                </Box>
                <IconButton onClick={() => clearComment(comment.id)} size="small" aria-label="directions">
                  <ClearIcon />
                </IconButton>
              </Box>
              <Typography style={{ marginRight: '5px', marginTop: '5px' }}>{comment.dateCreate}</Typography>
            </Paper>
          ))}
          <Paper
            style={{
              display: 'flex',
              padding: '10px',
              marginTop: '15px',
              border: '1px solid black',
            }}
          >
            <InputBase value={comment} onChange={handleChangeComment} placeholder="Leave a comment" />
            <IconButton onClick={addComment} size="small" aria-label="search">
              <DoneIcon />
            </IconButton>
            <Divider orientation="vertical" />
            <IconButton onClick={clearCommentInput} size="small" aria-label="directions">
              <ClearIcon />
            </IconButton>
          </Paper>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Board
          style={{
            backgroundColor: color,
            height: '100%',
          }}
          canAddLanes={true}
          draggable={true}
          editable={true}
          laneDraggable={false}
          collapsibleLanes={true}
          onLaneAdd={onLaneAdd}
          onLaneDelete={onLaneRemove}
          onCardAdd={onCardAdd}
          onCardDelete={onCardRemove}
          onCardMoveAcrossLanes={onCardMoveAcrossLanes}
          data={{ lanes: board.lanes }}
        />
      </Grid>
      <Grid item xs={2}>
        <Paper elevation={5} style={{ boxSizing: 'border-box', padding: '20px' }}>
          <SketchPicker
            width="93%"
            color={color}
            onChange={(color: any, event: any) => setColor(color.hex)}
            onChangeComplete={handleChangeColor}
          />
          <ColorButton onClick={onClickUpdateColor} variant="contained" color="primary">
            Update board color
          </ColorButton>
          <hr />
          <Box marginTop="20px" display="flex">
            <TextField
              value={boardName}
              onChange={(e: any) => setBoardName(e.target.value)}
              focused={focusBoardName}
              onFocus={() => setFocusBoardName(true)}
              label="Board name"
              variant="outlined"
              size="small"
              color="primary"
              style={{ width: '100%' }}
            />
            {focusBoardName ? (
              <>
                <IconButton onClick={onClickDoneBoardName} size="small">
                  <DoneIcon />
                </IconButton>
                <IconButton onClick={onClickClearBoardName} size="small">
                  <ClearIcon />
                </IconButton>
              </>
            ) : null}
          </Box>
        </Paper>
      </Grid>
    </GridContainer>
  );
});

export default BoardComponent;
