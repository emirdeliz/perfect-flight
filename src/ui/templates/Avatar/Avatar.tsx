import Image from 'next/image';
import { memo } from 'react';

interface AvatarProps {
  src: string;
}

export const Avatar = memo(({ src }: AvatarProps) => {
  return <Image src={src} alt="Avatar" width={32} height={32} />;
});
