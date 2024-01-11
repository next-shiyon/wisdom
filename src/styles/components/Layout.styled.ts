import styled from 'styled-components';

export const MainContainer = styled.main<{ $width?: string }>`
  width: ${({ $width }) => $width || '40%'};
  height: 100%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
`;
