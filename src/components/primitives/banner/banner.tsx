import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BannerProps {
  children: string;
  className?: string;
}

export const Banner = ({ children, className }: BannerProps) => {
  return (
    <h3
      className={twMerge(
        'w-fit py-1 px-4 mx-auto rounded-full bg-plt-tertiary',
        className
      )}
    >
      {children}
    </h3>
  );
};
