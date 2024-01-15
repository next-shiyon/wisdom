import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: -16px;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 0;
  background-color: ${({ theme }) => theme.backGroundColor.header};

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.header};
  }

  .user-profile {
    border-radius: 50%;
  }
`;

export const StyledNavigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  text-transform: capitalize;
  font-weight: 600;

  & svg {
    display: block;
    width: 1.45rem;
    height: 1.45rem;
  }
`;
