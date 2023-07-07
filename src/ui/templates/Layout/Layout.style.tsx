import styled from "styled-components";

const HEADER_HEIGHT = "120px";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.N5};
`;

export const Content = styled.div<{ close: boolean }>`
  text-align: center;
  padding: ${({ theme }) => theme.padding.Sm};
  margin-left: ${({ close }) => close ? 55 : 255}px;
  flex: 1;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LayoutContent = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;
