import styled from 'styled-components';
import { Input } from './Input';

const PeriodBoxContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;

  > div {
    width: 100%;
  }
`;

export default function PeriodBox() {
  return (
    <PeriodBoxContainer>
      <Input type="date" label="Period" />
      <Input type="date" label="" />
    </PeriodBoxContainer>
  );
}
