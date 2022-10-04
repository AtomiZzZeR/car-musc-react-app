import { FC } from 'react';
import { Slider } from '../../Slider';
import Styled from './About.styles';
import img from '../../../assets/images/imgMachine1.jpg';
import { Rhombs } from '../../Rhombs';
import icon1 from '../../../assets/images/voys.svg';
import icon2 from '../../../assets/images/star.svg';

const About: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.BoxContent>
            <Styled.Title>
              Полиуретановая пленка единственная надежная защита автомобиля от всех внешних воздействий
            </Styled.Title>

            <Rhombs />

            <Styled.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium
              sodales. Tristique odio pellentesque et tincidunt posuere arcu
            </Styled.Content>

            <Styled.BoxIcons1>
              <Styled.BoxIcon>
                <img src={icon1} alt={'voys logo'} />
              </Styled.BoxIcon>
              <Styled.BoxIcon>
                <img src={icon2} alt={'star logo'} />
              </Styled.BoxIcon>
            </Styled.BoxIcons1>

            <Styled.BoxIcons2>
              <Styled.BoxIcon>
                <img src={icon2} alt={'star logo'} />
              </Styled.BoxIcon>
              <Styled.BoxIcon>
                <img src={icon1} alt={'voys logo'} />
              </Styled.BoxIcon>
            </Styled.BoxIcons2>
          </Styled.BoxContent>

          <Slider
            img={img}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Pellentesque auctor nibh feugiat est. Consectetur lectus.`}
          />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default About;
