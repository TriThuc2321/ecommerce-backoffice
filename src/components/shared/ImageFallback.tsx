import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { useState } from 'react';

import defaultUser from '@/assets/images/default-img.png';

type ImageFallbackProps = {
  fallbackSrc?: string | StaticImport;
} & ImageProps;

export default function ImageFallback({
  src: initSrc,
  fallbackSrc = defaultUser,
  alt,
  ...props
}: ImageFallbackProps) {
  const [src, setSrc] = useState<StaticImport | string>(initSrc);

  return (
    <Image alt={alt} src={src} onError={() => setSrc(fallbackSrc)} {...props} />
  );
}
