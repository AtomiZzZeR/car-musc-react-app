import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 146.36px;
  height: 14.14px;
`;

const BoxItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
`;

const Item = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${EThemeColors.accent};
  transform: rotate(45deg);
`;

const StyledRhombs = {
  Wrapper,
  BoxItem,
  Item,
};

export default StyledRhombs;
