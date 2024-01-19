import { useFormContext } from 'react-hook-form';
import { LabelContainer } from '../../styles/LabelContainer.styled';
import { ErrorMessage } from '@hookform/error-message';
import { StyledErrorMessage } from '../../styles/StyledErrorMessage.styled';

export type TextareaProps = {
  label: string;
  name: string;
  rows: number;
};

export const Textarea = ({ label, name, rows }: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <LabelContainer $hasError={!!errors[name]}>
      <label data-testid="textarea-label">{label}</label>
      <textarea data-testid="textarea" rows={rows} {...register(name)} />
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
