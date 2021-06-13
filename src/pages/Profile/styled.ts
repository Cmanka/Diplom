import styled from 'styled-components';

export const MainBlock = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
  margin-top: 20px;
`;

export const LeftBlock = styled.div`
  min-width: 240px;
  flex: 0 0 320px;
  background-color: white-smoke;
`;

export const RightBlock = styled.div`
  margin-left: 30px;
  min-width: 240px;
  flex: 0 1 640px;
`;
