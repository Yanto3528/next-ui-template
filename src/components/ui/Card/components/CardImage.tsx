import { ComponentPropsWithoutRef } from 'react';

import Image, { type ImageProps } from 'next/image';

import { cn } from '@/lib/utils';

type Props = ComponentPropsWithoutRef<'div'> & {
  imageProps: ImageProps;
};

export function CardImage({
  className,
  imageProps: { className: imageClassName, ...otherImageProps },
  ...props
}: Props) {
  return (
    <div
      className={cn(
        'relative w-full h-[200px] first:rounded-tr-xl first:rounded-tl-xl group',
        className
      )}
      {...props}
    >
      <Image
        fill
        className={cn(
          'object-cover object-center w-full h-full group-first:rounded-tr-xl group-first:rounded-tl-xl',
          imageClassName
        )}
        {...otherImageProps}
      />
    </div>
  );
}
