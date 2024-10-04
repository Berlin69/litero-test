import { IconWarning } from '../../icons';
import { twMerge } from 'tailwind-merge';

export const ErrorShort = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-2">
        <IconWarning />
        <span className="text-xs font-bold line-clamp-1 text-ellipsis h-4">
          Weak instructions:
        </span>
      </div>
      <span className={twMerge('line-clamp-1 text-ellipsis text-xs h-4')}>
        To generate high-quality text, we recommend adding more details about
        your paper.
      </span>
    </div>
  );
};
