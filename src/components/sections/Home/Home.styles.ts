import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme';
import bg from '../../../assets/images/bg-home.jpg';

const Wrapper = styled.section`
  background: url(${bg}) 50% no-repeat;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 225.5px 0px 0px 0px;
`;

const Title = styled.h1`
  margin: 0px 0px 17.43px 0px;
  font-size: 9.375rem;
  line-height: 1.25;
  letter-spacing: 0em;
  font-family: 'ReformaGroteskBoldC', sans-serif;
  color: ${EThemeColors.accent};
`;

const Content = styled.div`
  max-width: 437px;
  margin: 40.93px 0px 40px 0px;
  font-size: 2.5rem;
  line-height: 1.2;
  font-family: 'ReformaGroteskMediumC', sans-serif;
  letter-spacing: 0em;
  text-align: center;
`;

const Link = styled.a`
  display: inline-block;
  margin: 0px 0px 103px 0px;
  padding: 15px 25px;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: ${EThemeColors.accent};
`;

const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxBLocks = styled.div`
  display: flex;
  height: 214px;
  border-top: 1px solid ${EThemeColors.border};
  border-bottom: 1px solid ${EThemeColors.border};
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 640px;
  text-transform: uppercase;

  &:nth-child(2) {
    border-left: 1px solid ${EThemeColors.border};
    border-right: 1px solid ${EThemeColors.border};
  }
`;

const TitleBlock = styled.h2`
  font-size: 1.125rem;
  margin: 0px 0px 20px 0px;
`;

const InfoBlock = styled.div`
  width: 265px;
  font-size: 1.5rem;
  text-align: center;
  color: ${EThemeColors.accent};

  &:not(:last-child) {
    margin: 0px 0px 15px 0px;
  }
`;

const StyledHome = {
  Wrapper,
  Container,
  Inner,
  Title,
  Content,
  Link,
  WrapperBox,
  BoxBLocks,
  Block,
  TitleBlock,
  InfoBlock,
};

export default StyledHome;
