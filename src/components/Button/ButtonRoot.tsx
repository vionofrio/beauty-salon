import { twMerge } from "tailwind-merge";

interface ButtonRootProps {
  className?: string;
  children: React.ReactNode;
}

export const ButtonRoot = ({ className, children }: ButtonRootProps) => {
  return (
    <button
      className={twMerge(
        "flex gap-3 rounded-md bg-brand px-8 py-4 font-medium text-brand-lighter",
        className
      )}
    >
      {children}
    </button>
  );
};
