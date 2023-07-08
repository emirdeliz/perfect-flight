import { Button, Flex } from "@atoms"
import { playMp3 } from "@helpers";
import { Logo } from "@templates";
import { useRouter } from 'next/router'
import { memo } from "react";

export const HomePage = memo(() => {
  const router = useRouter();

  const newGame = () => { 
    playMp3('/main-theme.mp3');
    router.push('game');
  }

  return (
    <Flex.Center wFull hFull>
      <Logo />
      <Button mt5 onClick={newGame}>Iniciar</Button>
    </Flex.Center>
  );
});
