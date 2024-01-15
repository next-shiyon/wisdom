import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant?: string }>`
  background-color: ${({ theme, variant }) =>
    variant === 'outline' ? '#fff' : theme.themeColor};
  color: ${({ theme, variant }) =>
    variant === 'outline' ? theme.themeColor : '#fff'};
  border: ${({ theme, variant }) =>
    variant === 'outline' && `1px solid ${theme.themeColor}`};
  padding: 16px 48px;
  border-radius: 48px;
  font-weight: 500;
`;

type ButtonProps = {
  children: ReactNode;
  variant?: 'outline';
  onClick?: () => void;
};

export default function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
}
