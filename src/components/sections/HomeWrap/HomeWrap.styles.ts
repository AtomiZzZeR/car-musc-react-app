import styled from 'styled-components';
import bg from '../../../assets/images/bg-home.jpg';
import { EThemeColors } from '../../../assets/styles/theme';

const Wrapper = styled.section`
  background: url(${bg}) 50% no-repeat;
  height: 1002px;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 285.5px 0px 0px 0px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0px 0px 33.93px 0px;
  font-size: 4rem;
  max-width: 636px;
  line-height: 1.25;
  font-family: 'ReformaGroteskBoldC', sans-serif;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${EThemeColors.accent};
`;

const Content = styled.div`
  max-width: 437px;
  margin: 40.93px 0px 92px 0px;
  font-family: 'ReformaGroteskMediumC', sans-serif;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: 0;
`;

const Link = styled.a`
  padding: 13.5px 18px;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: ${EThemeColors.accent};
`;

const StyledHomeWrap = {
  Wrapper,
  Container,
  Inner,
  Title,
  Content,
  Link,
};

export default StyledHomeWrap;
