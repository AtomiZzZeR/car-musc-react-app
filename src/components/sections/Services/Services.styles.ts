import styled from 'styled-components';

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 0px 0px 40px 0px;
`;

const Button = styled.button`
  padding: 15px 40px;
  font-size: 2rem;
  text-transform: uppercase;
  background-color: transparent;
`;

const BoxBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const StyledServices = {
  Wrapper,
  Container,
  Inner,
  BoxButtons,
  Button,
  BoxBlocks,
};

export default StyledServices;
