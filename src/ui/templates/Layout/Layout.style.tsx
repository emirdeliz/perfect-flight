import styled from "styled-components";

const HEADER_HEIGHT = "120px";

export const Content = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.padding.Sm};
  flex: 1;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.N1};
`;

export const LayoutContent = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;
