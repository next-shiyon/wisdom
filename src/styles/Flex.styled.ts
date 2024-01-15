import styled from 'styled-components';

export const Flex = styled.div<{ $direction?: string; $gap?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  gap: ${({ $gap }) => `${$gap}px` || '0px'};
`;
