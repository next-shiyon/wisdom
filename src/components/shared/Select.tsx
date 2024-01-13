import { ReactNode } from 'react';
import { LabelContainer } from '../../styles/LabelContainer.styled';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { StyledErrorMessage } from '../../styles/StyledErrorMessage.styled';

type SelectProps = {
  label: string;
  children: ReactNode;
  name: string;
};

export const Select = ({ label, children, name }: SelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <LabelContainer $hasError={!!errors[name]}>
      <label>{label}</label>
      <select {...register(name)}>{children}</select>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <StyledErrorMessage>{message}</StyledErrorMessage>
        )}
      />
    </LabelContainer>
  );
};
