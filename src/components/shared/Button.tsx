import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => {};
};

export default function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
