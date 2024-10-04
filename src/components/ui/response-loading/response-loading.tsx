import { IconLoading } from '../../icons';

export const ResponseLoading = () => {
  return (
    <div className="flex items-center gap-2">
      <IconLoading className="animate-spin" />
      <span className="line-clamp-1 text-ellipsis text-plt-dark-900 text-xs">
        Analyzing your task details ...
      </span>
    </div>
  );
};
