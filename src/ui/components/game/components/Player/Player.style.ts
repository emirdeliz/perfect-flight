import styled from 'styled-components';

export const Player = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.N4};
  padding: ${({ theme }) => theme.padding.Nm} 0;
  width: 100%;
`;

const AVATAR_HEIGHT = "32px";
const AVATAR_WIDTH = "32px";

export const Avatar = styled.img`
  width: ${AVATAR_WIDTH};
  height: ${AVATAR_HEIGHT};
  border-radius: 50%;
`;