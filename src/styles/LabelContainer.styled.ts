import styled from 'styled-components';

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.945rem;
    margin-bottom: 8px;
    color: hsl(0, 0%, 60%);
  }

  > input,
  select {
    box-shadow: 0px 6px 13px -3px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border: 1px solid hsl(0, 0%, 90%);
    height: 40px;
  }
`;
