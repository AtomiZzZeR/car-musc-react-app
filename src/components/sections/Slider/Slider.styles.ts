import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const BoxSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1557.71px;
`;

const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 71px;
  height: 71px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${EThemeColors.primary};
  border: 3px solid ${EThemeColors.accent};
  transform: rotate(45deg);
`;

const Icon = styled.div`
  font-size: 1.7rem;
  color: ${EThemeColors.font};
  transform: rotate(-45deg);
`;

const ReverseIcon = styled(Icon)`
  transform: rotate(135deg);
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1296px;
  text-transform: uppercase;
`;

const Block = styled.div`
  text-align: center;
  width: 416px;
  height: 420px;

  &:not(:last-child) {
    margin: 0px 24px 0px 0px;
  }
`;

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  width: 360px;
  height: 70px;
  background-color: ${EThemeColors.accent};
  transform: translateY(-35px);
`;

const Content = styled.div`
  width: 286px;
  font-size: 1.125rem;
  text-align: center;
  margin: 30px 0px 0px 0px;
`;

const StyledSlider = {
  Wrapper,
  BoxSlider,
  BoxButton,
  Button,
  Icon,
  ReverseIcon,
  Container,
  Inner,
  Block,
  Rectangle,
  Content,
};

export default StyledSlider;
