import PageInfo from '../../components/shared/PageInfo/PageInfo';
import { Flex } from '../../styles/Flex.styled';
import { Input } from '../../styles/Input.styled';
import { Select } from '../../styles/Select.styled';

export default function HabitCreate() {
  return (
    <>
      HabitCreate
      <PageInfo
        title="새로운 습관을 추가하기"
        description="추가된 습관은 언제든지 수정할 수 있습니다."
      />
      <Flex $direction="column">
        <label>
          습관명
          <Input type="text" />
        </label>
        <label>
          기간 (from - to)
          <Input type="date" />
          <Input type="date" />
        </label>
        <label>
          횟수 (일주일에 몇 번 행동하실건가요?)
          <Select>
            <option value="dog">1</option>
            <option value="dog">2</option>
            <option value="dog">3</option>
            <option value="dog">4</option>
            <option value="dog">5</option>
            <option value="dog">6</option>
            <option value="dog">7</option>
          </Select>
        </label>
      </Flex>
    </>
  );
}
