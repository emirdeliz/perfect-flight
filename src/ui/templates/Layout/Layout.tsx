import { ReactNode, memo, useMemo, useState } from 'react';
import * as S from './Layout.style';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.LayoutContent>
        <S.Content>{children}</S.Content>
      </S.LayoutContent>
    </S.Layout>
  );
});
