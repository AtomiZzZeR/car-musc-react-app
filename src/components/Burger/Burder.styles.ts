import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 50px;
  height: 25px;
`;

const Item = styled.div`
  width: 40px;
  height: 3px;
  background-color: ${EThemeColors.accent};

  &:nth-child(2) {
    margin: 0px 10px 0px 0px;
  }
`;

const StyledBurger = {
  Wrapper,
  Item,
};

export default StyledBurger;
