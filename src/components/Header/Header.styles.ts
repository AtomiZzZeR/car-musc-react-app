import styled from 'styled-components';

const Wrapper = styled.header`
  position: absolute;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 109px;
  font-family: 'ReformaGroteskMediumC', sans-serif;
`;

const StyledHeader = {
  Wrapper,
  Container,
  Inner,
};

export default StyledHeader;
