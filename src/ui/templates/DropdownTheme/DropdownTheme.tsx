import { memo, useState } from "react";
import { Flex, Title } from "@atoms";
import { DropdownForm } from "@organisms";
import * as S from './DropdownTheme.style';

interface DropdownThemeProps { 
  onChange: (isDark: boolean) => void; 
}

const themeOptions = ['Light', 'Dark'];

export const DropdownTheme = memo(({ onChange }: DropdownThemeProps) => {
  const [theme, setTheme] = useState<string>('Dark');
  return (
    <Flex pr4 alignEnd>
      <S.DropdownTheme>
        <Title mb2 n5={theme !== 'Light'}>Theme</Title>
        <DropdownForm<string>
          options={themeOptions}
          value={theme}
          onDropdownChange={e => {
            const value = e!.value;
            setTheme(value);
            onChange(value === 'Dark');
          }}
        />
      </S.DropdownTheme>
    </Flex>
  );
});