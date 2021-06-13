import { useEffect } from 'react';
import { MainBlock, LeftBlock, RightBlock } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAvatarState, selectUserDataState } from 'core/selectors/user';
import { userProfile } from 'core/actions/user';
import LeftContent from './components/LeftContent';
import { Box, Typography } from '@material-ui/core';
import { MyAvatar } from './components/LeftContent/styled';

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserDataState);
  const userAvatar = useSelector(selectUserAvatarState);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <MainBlock>
      <LeftBlock>
        <LeftContent user={userData} userAvatar={userAvatar} />
      </LeftBlock>
      <RightBlock>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          marginBottom="30px"
        >
          <Box display="flex" alignItems="center" justifyContent="space-evenly" width="100%">
            <MyAvatar
              src={userAvatar ? userAvatar : null}
            >{`${userData.firstName[0]}${userData.lastName[0]}`}</MyAvatar>
            <Typography variant="h4">{`${userData.firstName} ${userData.lastName}`}</Typography>
          </Box>
          <Typography variant="h4"></Typography>
        </Box>
      </RightBlock>
    </MainBlock>
  );
};

export default Profile;
