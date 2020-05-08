import styled, { css } from 'styled-components';

import { backgroundColor, foregroundColor } from '../styles/theme';

interface LayoutProps {
  row?: boolean;
  reverse?: boolean;
  center?: boolean;
}

export const Layout = styled.div<LayoutProps>`
  display: flex;
  color: ${foregroundColor};
  background-color: ${backgroundColor};
  min-height: 100vh;
  flex-direction: ${({ row, reverse }) =>
    (row && reverse && 'row-reverse') ||
    (row && !reverse && 'row') ||
    (!row && reverse && 'column-reverse') ||
    (!row && !reverse && 'column')};
  ${({ center }) =>
    center &&
    css`
      align-items: center;
      align-content: center;
      justify-content: center;
    `};
`;

Layout.defaultProps = {
  center: false,
  row: false,
  reverse: false,
};
