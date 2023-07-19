import { twMerge } from "tailwind-merge";

interface LogoProps {
  large?: boolean;
  light?: boolean;
  className?: string;
}

export const Logo = ({ large, light, className }: LogoProps) => {
  return (
    <div
      className={twMerge(
        `font-poppins font-bold lowercase text-brand-dark`,
        `${large ? `text-4xl` : `text-2xl`}`,
        className
      )}
    >
      Beauty
      <span className={`${light ? `text-brand-lighter` : `text-brand`}`}>
        Salon
      </span>
      .
    </div>
  );
};
