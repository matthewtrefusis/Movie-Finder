import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  colour?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
}

const Button = ({ children, onClick, colour = "primary" }: Props) => {
  return (
    <button type="button" className={`btn btn-${colour}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
