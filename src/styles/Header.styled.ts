import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px;
  background-color: ${({ theme }) => theme.backGroundColor.header};

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.header};
  }
`;

export const StyledNavigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  text-transform: capitalize;

  svg {
    display: block;
    width: 1.15rem;
    height: 1.15rem;
  }
`;
