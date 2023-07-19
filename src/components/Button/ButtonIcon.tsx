import { LucideProps } from "lucide-react";

interface ButtonIconProps extends LucideProps {
  icon: React.ElementType;
}

export const ButtonIcon = ({ icon: Icon, ...props }: ButtonIconProps) => {
  return <Icon {...props} />;
};
