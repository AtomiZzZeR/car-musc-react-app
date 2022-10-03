import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;

  & :not(:last-child) {
    margin: 0px 40px 0px 0px;
  }
`;

const InnerLink = styled.span`
  font-family: 'ReformaGroteskMediumC', sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

const StyledMenu = {
  Wrapper,
  InnerLink,
};

export default StyledMenu;
