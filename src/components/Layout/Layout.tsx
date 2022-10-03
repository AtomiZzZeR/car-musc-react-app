import { FC } from 'react';
import { Header } from '../Header';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../../router/index';
import Styled from './Layout.styles';
import { Footer } from '../Footer';

const Layout: FC = () => {
  return (
    <Styled.Wrapper>
      <Header />

      <Styled.Main>
        <Routes>
          {routes.map(({ path, element: Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Routes>
      </Styled.Main>

      <Footer />
    </Styled.Wrapper>
  );
};

export default Layout;
