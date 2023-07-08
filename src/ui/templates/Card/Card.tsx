import { ReactNode, memo } from 'react';
import * as S from './Card.style';

export interface CardProps {
  children: ReactNode;
  maxHeight?: string;
}

export const Card = memo(({ children, maxHeight }: CardProps) => {
  return <S.Card maxHeight={maxHeight}>{children}</S.Card>;
});
