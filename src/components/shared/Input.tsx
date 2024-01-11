import { LabelContainer } from '../../styles/LabelContainer.styled';

export type InputProps = {
  type: string;
  label: string;
};

export const Input = ({ type, label }: InputProps) => {
  return (
    <LabelContainer>
      <label data-testid="input-label">{label}</label>
      <input data-testid="input" type={type} />
    </LabelContainer>
  );
};
