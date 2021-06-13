import { selectTeamById } from 'core/selectors/teams';
import { useSelector } from 'react-redux';
import { LeftBlock, MainBlock, RightBlock } from './styled';
import { TeamProps } from './types';
import InputsBlock from './components/InputsBlock';
import TeammatesBlock from './components/TeammatesBlock';
import RightContent from './components/RightContent';

const Team = ({ match }: TeamProps) => {
  const team = useSelector(selectTeamById(match.params.id));

  return (
    <>
      <MainBlock>
        <LeftBlock>
          <InputsBlock team={team} />
          <TeammatesBlock team={team} />
        </LeftBlock>
        <RightBlock>
          <RightContent team={team} />
        </RightBlock>
      </MainBlock>
    </>
  );
};

export default Team;
