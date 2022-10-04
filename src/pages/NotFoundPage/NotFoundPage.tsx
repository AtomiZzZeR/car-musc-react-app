import React from 'react';
import Styled from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Content>Page not found</Styled.Content>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default NotFoundPage;
