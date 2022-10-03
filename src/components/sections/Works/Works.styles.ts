import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1920px;
  height: 840px;
`;

const BoxImg = styled.div`
  width: 320px;
  height: 280px;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div``;

const StyledWorks = {
  Wrapper,
  BoxContent,
  BoxImg,
  Container,
  Inner,
};

export default StyledWorks;
