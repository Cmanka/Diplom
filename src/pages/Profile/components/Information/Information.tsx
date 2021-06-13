import React, { FC } from 'react';
import Loading from '../../../../core/components/Loading';
import { useStyles } from './styles';
import { InfoProps } from './types';

const Information: FC<InfoProps> = ({
  isLoading,
  userData,
  userAvatar,
  isAvatarLoading,
}: InfoProps) => {
  const classes = useStyles();
  return (
    <div className={classes.leftContent}>
      <h3 className={classes.title}>User information</h3>
      <hr />
      <div className={classes.profileInfoContent}>
        {isLoading || isAvatarLoading ? (
          <Loading position="absolute" />
        ) : (
          <>
            <div>
              <img
                src={
                  userAvatar
                    ? userAvatar
                    : 'https://media.defense.gov/2020/Feb/19/2002251686/700/465/0/200219-A-QY194-002.JPG'
                }
                alt=""
                className={classes.avatarSize}
              />
            </div>
            <div className={classes.attrCont}>
              <p>
                <strong>First name</strong> - {userData?.firstName}
              </p>
              <p>
                <strong>Last name</strong> - {userData?.lastName}
              </p>
              <p>
                <strong>Email</strong> - {userData?.email}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Information;
