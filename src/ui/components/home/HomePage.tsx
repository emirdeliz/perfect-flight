import { Button, Flex } from "@atoms"
import { Logo } from "@templates";
import { useRouter } from 'next/router'
import { memo } from "react";

export const HomePage = memo(() => {
  const router = useRouter();
  return (
    <Flex.Center wFull hFull>
      <Logo />
      <Button mt5 onClick={() => router.push('game')}>Iniciar</Button>
    </Flex.Center>
  );
});
