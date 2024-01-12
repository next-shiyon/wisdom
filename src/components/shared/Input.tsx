import { useFormContext } from 'react-hook-form';
import { LabelContainer } from '../../styles/LabelContainer.styled';
import { ErrorMessage } from '@hookform/error-message';
import { StyledErrorMessage } from '../../styles/StyledErrorMessage.styled';

export type InputProps = {
  type: string;
  label: string;
  name: string;
};

export const Input = ({ type, label, name }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <LabelContainer $hasError={!!errors[name]}>
      <label data-testid="input-label">{label}</label>
      <input data-testid="input" type={type} {...register(name)} />
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
