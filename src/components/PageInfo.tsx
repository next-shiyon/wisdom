import styled from 'styled-components';

const TitleContainer = styled.div`
  margin-bottom: 62px;
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.425rem;
`;

const StyledDesc = styled.span`
  font-size: 1.425rem;
  font-style: italic;
`;

export type PageInfoProps = {
  title: string;
  description: string;
};

export default function PageInfo({ title, description }: PageInfoProps) {
  return (
    <TitleContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDesc>{description}</StyledDesc>
    </TitleContainer>
  );
}
