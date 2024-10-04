import React from 'react';
import { IconChevronDown } from '../../icons/icon-chevron-down';
import { twMerge } from 'tailwind-merge';

interface SelectProps {
  label: string;
  className?: string;
  option: string;
}

export const Select = <T extends SelectProps>({
  label,
  className,
  option,
}: T) => {
  return (
    <div
      className={twMerge(
        'bg-plt-secondary py-2 px-4 rounded-full flex gap justify-between cursor-pointer',
        className
      )}
    >
      <span className="text-sm text-plt-dark-600">{label}</span>
      <div className="flex items-center gap-1">
        <span className="text-plt-accent font-semibold text-sm">{option}</span>
        <IconChevronDown className="text-plt-accent" size={16} />
      </div>
    </div>
  );
};
