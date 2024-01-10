import styled from 'styled-components';

export const Flex = styled.div<{ $direction?: string }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
`;
