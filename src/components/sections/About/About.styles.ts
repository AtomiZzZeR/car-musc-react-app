import styled from 'styled-components';

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxContent = styled.div`
  width: 526px;
`;

const Title = styled.h2`
  margin: 0px 0px 53px 0px;
  font-size: 2rem;
  text-transform: uppercase;
`;

const Content = styled.div`
  margin: 49.86px 0px 50px 0px;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.03em;
  font-family: 'ReformaGroteskMediumC', sans-serif;
`;

const BoxIcons1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto 50.98px;
  width: 419px;
`;

const BoxIcons2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  width: 419px;
`;

const BoxIcon = styled.div``;

const StyledAbout = {
  Wrapper,
  Container,
  Inner,
  BoxContent,
  Title,
  Content,
  BoxIcons1,
  BoxIcons2,
  BoxIcon,
};

export default StyledAbout;
