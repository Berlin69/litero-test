import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  className?: string;
  variant?: 'filled' | 'outline';
  children?: React.ReactNode;
}

export const Button = ({
  className,
  variant = 'filled',
  children,
}: ButtonProps) => {
  const variants = {
    filled:
      'flex justify-center items-center bg-plt-secondary py-2 px-5 rounded-lg transition-opacity hover:opacity-80',
    outline:
      'flex justify-center items-center bg-transparent text-plt-accent py-2 px-5 border border-plt-accent rounded-lg transition-opacity hover:opacity-80',
  };

  return (
    <button className={twMerge(variants[variant], className)}>
      {children}
    </button>
  );
};
