import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 526px;
  height: 100%;
`;

const Block = styled.div``;

const BoxMain = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 30px 0px;
`;

const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: 0px 30px 0px 0px;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
`;

const Content = styled.div`
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.03em;
  font-family: 'ReformaGroteskMediumC', sans-serif;
`;

const Rhobms = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 0px;
`;

const StyledAdvanContent = {
  Wrapper,
  Block,
  BoxMain,
  BoxIcon,
  Title,
  Content,
  Rhobms,
};

export default StyledAdvanContent;
