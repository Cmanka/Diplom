import { Box, IconButton, Paper, Typography } from '@material-ui/core';
import { Images } from 'core/constants/images';
import { BoldTypogarphy, MyPaper, BoardImg, LinkImg, LinkBlock, LinkPaper } from './styled';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import AddLink from 'core/components/Dialogs/AddLink';
import { useDispatch } from 'react-redux';
import { changeTeam } from 'core/actions/team';
import { ITeam } from 'core/interfaces/ITeam';
import { RightContentProps } from './types';
import ClearIcon from '@material-ui/icons/Clear';
import ForwardIcon from '@material-ui/icons/Forward';
import { Link } from 'react-router-dom';

const RightContent = ({ team }: RightContentProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onClickAddLink = (team: ITeam) => {
    dispatch(changeTeam(team));
  };

  const onClickRemoveLink = (linkId: string) => {
    dispatch(
      changeTeam({
        ...team,
        links: team.links.filter((link) => link.id !== linkId),
      })
    );
  };

  const onClickRemoveProj = (projId: string) => {};

  return (
    <>
      <AddLink handleClose={handleClose} open={open} onClickAddLink={onClickAddLink} team={team} />
      <div>
        <BoldTypogarphy variant="h6">Projects in work</BoldTypogarphy>
        <LinkPaper linksLength={team.projects.length}>
          {team.projects.length ? (
            team.projects.map((proj, i) => (
              <Paper
                key={proj.id}
                style={{
                  width: '100%',
                  padding: '10px',
                  boxSizing: 'border-box',
                  marginTop: i !== 0 ? '10px' : 0,
                }}
              >
                <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                  <h5 style={{ margin: 0 }}>{proj.name}</h5>

                  <IconButton onClick={() => onClickRemoveProj(proj.id)} size="small">
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Members({proj.users.length})
                    </Typography>
                    <Typography component="p" variant="caption" color="textSecondary">
                      Creator: {`${proj.creator.firstName} ${proj.creator.lastName}`}
                    </Typography>
                  </Box>
                  <Link to={`/projects/${proj.id}`}>
                    <IconButton size="small">
                      <ForwardIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Paper>
            ))
          ) : (
            <>
              <LinkImg src={Images.Links} />
              <Box textAlign="center">
                <h3>Share information!</h3>
                <Typography variant="body2">Add links so everyone can find out where your team is working.</Typography>
              </Box>
            </>
          )}
        </LinkPaper>
      </div>
      <Box marginTop="30px">
        <LinkBlock>
          <BoldTypogarphy variant="h6">Links</BoldTypogarphy>
          <IconButton onClick={handleOpen} size="small">
            <AddIcon />
          </IconButton>
        </LinkBlock>
        <LinkPaper linksLength={team.links.length}>
          {team.links.length ? (
            team.links.map((link, i) => (
              <Paper
                key={link.id}
                style={{
                  width: '100%',
                  padding: '10px',
                  boxSizing: 'border-box',
                  marginTop: i !== 0 ? '10px' : 0,
                }}
              >
                <h5 style={{ margin: 0 }}>{link.name}</h5>
                <Typography variant="caption" color="textSecondary">
                  {link.description}
                </Typography>
                <Box display="flex" alignItems="flex-end" justifyContent="space-between">
                  <Typography variant="caption">
                    <a href={link.url}>{link.url.length <= 50 ? link.url : `${link.url.substr(0, 50)}...`}</a>
                  </Typography>

                  <IconButton onClick={() => onClickRemoveLink(link.id)} size="small">
                    <ClearIcon />
                  </IconButton>
                </Box>
              </Paper>
            ))
          ) : (
            <>
              <LinkImg src={Images.Links} />
              <Box textAlign="center">
                <h3>Share information!</h3>
                <Typography variant="body2">Add links so everyone can find out where your team is working.</Typography>
              </Box>
            </>
          )}
        </LinkPaper>
      </Box>
    </>
  );
};

export default RightContent;
