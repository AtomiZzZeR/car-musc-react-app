import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 306px;
  height: 426px;
  padding: 79.2px 0px 50px 0px;
  text-transform: uppercase;
  border: 1px solid ${EThemeColors.border};
`;

const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70.34px;
  margin: 0px 0px 20.45px 0px;
`;

const Title = styled.h3`
  margin: 0px 0px 20px 0px;
  font-size: 1.5rem;
`;

const Content = styled.div`
  width: 226px;
  margin: 0px 0px 25px 0px;
  text-align: center;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  padding: 8px 20px;
  background-color: ${EThemeColors.accent};
`;

const StyledBlockItem = {
  Wrapper,
  BoxIcon,
  Title,
  Content,
  Link,
};

export default StyledBlockItem;
