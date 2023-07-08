import styled from 'styled-components';
import { CardProps } from './Card';

export const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.N2};
  border-radius: ${({ theme }) => theme.radius.Sm};
  padding: ${({ theme }) => theme.padding.Sm} 0;
  padding-bottom: 0;
  ${({ maxHeight }) => maxHeight ? `height: 100%; max-height: ${maxHeight}` : ''}
`;