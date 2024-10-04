import { twMerge } from 'tailwind-merge';

interface CounterProps {
  prompt: string;
}

export const Counter = ({ prompt }: CounterProps) => {
  return (
    <div
      className={twMerge(
        'text-right font-bold text-[10px] leading-[14px] text-plt-dark-500',
        prompt.length > 10000 && 'text-plt-alert animate-shake-x'
      )}
    >
      <span>{prompt.length}</span>
      <span>/10000</span>
    </div>
  );
};
