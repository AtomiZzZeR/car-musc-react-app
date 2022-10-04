import { FC } from 'react';
import { Header } from '../../components/Header';
import { About } from '../../components/sections/About';
import { Benefits } from '../../components/sections/Benefits';
import { Contact } from '../../components/sections/Contact';
import { HomeWrap } from '../../components/sections/HomeWrap';
import { Price } from '../../components/sections/Price';
import { Works } from '../../components/sections/Works';
import { TitleSection } from '../../components/TitleSection';
import Styled from './WrappingPage.styles';

const WrappingPage: FC = () => {
  return (
    <Styled.Wrapper>
      <HomeWrap />

      <About />

      <Benefits />

      <Price />

      <Works />

      <Contact />
    </Styled.Wrapper>
  );
};

export default WrappingPage;
