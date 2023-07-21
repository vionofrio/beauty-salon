import { twMerge } from "tailwind-merge";

export const ButtonRoot = ({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twMerge(
        "flex gap-3 rounded-md bg-brand px-8 py-4 font-medium text-brand-lighter",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
