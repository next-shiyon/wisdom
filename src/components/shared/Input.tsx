import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.945rem;
    margin-bottom: 8px;
    color: hsl(0, 0%, 60%);
  }

  > input {
    box-shadow: 0px 6px 13px -3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 90%);
    height: 40px;
  }
`;

export type InputProps = {
  type: string;
  label: string;
};

export const Input = ({ type, label }: InputProps) => {
  return (
    <InputContainer>
      <label data-testid="input-label">{label}</label>
      <input data-testid="input" type={type} />
    </InputContainer>
  );
};
