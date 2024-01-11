import {
  StyledDesc,
  StyledTitle,
  TitleContainer,
} from '../../styles/components/PageInfo.styled';

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
