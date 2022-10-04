import styled from 'styled-components';

const Wrapper = styled.div``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  font-size: 4rem;
`;

const StyledNotFoundPage = {
  Wrapper,
  Container,
  Inner,
  Content,
};

export default StyledNotFoundPage;
