import Image from 'next/image';
import { memo } from 'react';

export const Logo = memo(() => {
  return (
    <Image
      src="/squid-game.png"
      alt="Squid Game"
      width={397}
      height={192}
      priority
    />
  );
});
