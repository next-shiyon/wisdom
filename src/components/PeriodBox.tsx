import styled from 'styled-components';
import { Input } from './shared/Input';

const PeriodBoxContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;

  > div {
    width: 100%;
  }
`;

type PeriodBoxProps = {
  name: string;
};

export default function PeriodBox({ name }: PeriodBoxProps) {
  return (
    <PeriodBoxContainer>
      <Input type="date" label="Period" name={`${name}From`} />
      <Input type="date" label="" name={`${name}To`} />
    </PeriodBoxContainer>
  );
}
