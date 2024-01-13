import styled from 'styled-components';

export const Flex = styled.div<{ $direction?: string; $gap?: number }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  gap: ${({ $gap }) => `${$gap}px` || '0px'};
`;
