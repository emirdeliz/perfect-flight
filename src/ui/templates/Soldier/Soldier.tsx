import Image from 'next/image';
import { memo } from 'react';

interface SoldierProps {
  type: 'circle' | 'square' | 'triangle';
}

export const Soldier = memo(({ type }: SoldierProps) => {
  return (
    <Image
      src={`/soldier-${type}.png`}
      alt="Squid Game"
      width={159}
      height={136}
    />
  );
});
