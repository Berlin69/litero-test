import React from 'react';
import { IconErrorRed } from '../../icons';
import { twMerge } from 'tailwind-merge';

export const ErrorShort = () => {
  return (
    <div className="flex gap-1">
      <div className="flex items-center gap-2">
        <IconErrorRed />
      </div>
      <span
        className={twMerge(
          'line-clamp-1 text-ellipsis text-xs text-plt-red-900'
        )}
      >
        Add paper details to proceed
      </span>
    </div>
  );
};
