import { FC } from 'react';
import { Rhombs } from '../../Rhombs';
import Styled from './HomeWrap.styles';

const HomeWrap: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Title>Оклейка автомобиля защитными пленками</Styled.Title>

          <Rhombs />

          <Styled.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.
          </Styled.Content>

          <Styled.Link>цены</Styled.Link>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default HomeWrap;
