import styled from 'styled-components';

const CONTENT_MAX_WIDTH = '1200px';

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.margin.XXLg};
  max-width: ${CONTENT_MAX_WIDTH};
  width: 100%;
`;
