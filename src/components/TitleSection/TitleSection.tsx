import { FC } from 'react';
import { Rhombs } from '../Rhombs';
import Styled from './TitleSection.styles';

interface ITitleSectionProps {
  title: string;
}

const TitleSection: FC<ITitleSectionProps> = ({ title }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>

      <Rhombs />
    </Styled.Wrapper>
  );
};

export default TitleSection;
