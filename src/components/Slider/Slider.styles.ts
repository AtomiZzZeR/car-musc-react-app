import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme';

const Wrapper = styled.div`
  width: 636px;
`;

const Img = styled.img`
  margin: 0px 0px 40px 0px;
`;

const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Content = styled.div`
  width: 422px;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-align: center;
`;

const StyledSlider = {
  Wrapper,
  Img,
  BoxContent,
  BoxButton,
  Button,
  Icon,
  ReverseIcon,
  Content,
};

export default StyledSlider;
