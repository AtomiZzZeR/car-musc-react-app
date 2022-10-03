import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme';

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 745px;
  text-transform: uppercase;
`;

const BoxMain = styled.div`
  width: 636px;
`;

const Title = styled.h2`
  margin: 0px 0px 40px 0px;
  font-size: 3.25rem;
`;

const Content = styled.div`
  max-width: 526px;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: none;
  font-family: 'ReformaGroteskMediumC', sans-serif;
  margin: 60.86px 0px 0px 0px;
`;

const BoxBLocks = styled.div`
  display: flex;
`;

const FirstBox = styled.div`
  height: 705px;
  border: 1px solid ${EThemeColors.border};
`;

const SecondBox = styled(FirstBox)`
  margin: 40px 0px 0px 0px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 316px;
  height: 176px;
  padding: 25px 0px 35px 0px;

  &:not(:last-child) {
    border-bottom: 1px solid ${EThemeColors.border};
  }
`;

const TitleBlock = styled.h3`
  font-size: 3.25rem;
  color: ${EThemeColors.accent};
`;

const TitleBlockInner = styled.span`
  font-size: 1.5rem;
`;

const Icon = styled.img`
  margin: 0px 0px 22px 0px;
`;

const ContentBlock = styled.div`
  width: 277px;
  text-align: center;
`;

const StyledAchiev = {
  Wrapper,
  Container,
  Inner,
  BoxMain,
  Title,
  Content,
  BoxBLocks,
  FirstBox,
  SecondBox,
  Block,
  TitleBlock,
  TitleBlockInner,
  Icon,
  ContentBlock,
};

export default StyledAchiev;
