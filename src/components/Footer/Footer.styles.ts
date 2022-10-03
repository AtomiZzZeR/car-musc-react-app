import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme';

const Wrapper = styled.footer`
  border-top: 1px solid ${EThemeColors.border};
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 89px;
`;

const Copyright = styled.div`
  text-transform: uppercase;
  color: ${EThemeColors.border};
`;

const StyledFooter = {
  Wrapper,
  Container,
  Inner,
  Copyright,
};

export default StyledFooter;
