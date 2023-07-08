import styled from 'styled-components';

const PARTICIPANT_MAX_WIDTH = "450px";
const PARTICIPANT_MAX_HEIGHT = "330px";

export const Players = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 0 ${({ theme }) => theme.padding.Sm};
  max-height: ${PARTICIPANT_MAX_HEIGHT};
  max-width: ${PARTICIPANT_MAX_WIDTH};
`;