import styled from 'styled-components';

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoxBlocks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBenefits = {
  Wrapper,
  Container,
  Inner,
  BoxBlocks,
};

export default StyledBenefits;
