import { FC } from 'react';
import { Achiev } from '../../components/sections/Achievs';
import { Advantages } from '../../components/sections/Advantages';
import { Advantages2 } from '../../components/sections/Advantages2';
import { Contact } from '../../components/sections/Contact';
import { Home } from '../../components/sections/Home';
import { Services } from '../../components/sections/Services';
import { Slider } from '../../components/sections/Slider';
import { Works } from '../../components/sections/Works';
import Styled from './HomePage.styles';

const HomePage: FC = () => {
  return (
    <Styled.Wrapper>
      <Home />

      <Achiev />

      <Slider />

      <Advantages />

      <Services />

      <Advantages2 />

      <Works />

      <Contact />
    </Styled.Wrapper>
  );
};

export default HomePage;
