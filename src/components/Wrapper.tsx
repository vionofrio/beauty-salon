import { twJoin } from "tailwind-merge";

interface WrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div
      className={twJoin(
        "mx-auto max-w-screen-desktop px-6 desktop:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};
