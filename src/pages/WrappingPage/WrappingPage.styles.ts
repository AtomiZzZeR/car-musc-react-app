import styled from 'styled-components';

const Wrapper = styled.div`
  & section {
    margin: 0px 0px 180px 0px;
  }

  & section:last-child {
    margin: 0px 0px 100px 0px;
  }
`;

const StyledWrappingPage = {
  Wrapper,
};

export default StyledWrappingPage;
