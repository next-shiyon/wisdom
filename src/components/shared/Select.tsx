import { ReactNode } from 'react';
import { LabelContainer } from '../../styles/LabelContainer.styled';

type SelectProps = {
  label: string;
  children: ReactNode;
};

export const Select = ({ label, children }: SelectProps) => {
  return (
    <LabelContainer>
      <label>{label}</label>
      <select>{children}</select>
    </LabelContainer>
  );
};
