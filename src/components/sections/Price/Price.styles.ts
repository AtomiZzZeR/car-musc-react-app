import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme';

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div``;

const Table = styled.table`
  width: 1296px;
  height: 566px;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const Tr = styled.tr``;

const Th = styled.th`
  width: 240px;
  height: 94px;
  border-top: 1px solid ${EThemeColors.border};
  border-bottom: 1px solid ${EThemeColors.border};
`;

const Td = styled.td`
  width: 240px;
  height: 118px;
  text-align: center;
	color: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid ${EThemeColors.border};

  &:first-child {
    color: ${EThemeColors.accent};
  }
`;

const StyledPrice = {
  Wrapper,
  Container,
  Inner,
  Table,
  Tr,
  Th,
  Td,
};

export default StyledPrice;
