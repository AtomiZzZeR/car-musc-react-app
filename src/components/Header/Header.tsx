import { FC } from 'react';
import { Menu } from '../Menu';
import { ILink } from '../Menu/Menu';
import Styled from './Header.styles';
import { v4 as uuid } from 'uuid';
import { Burger } from '../Burger';

const Header: FC = () => {
  const menu: ILink[] = [
    { id: uuid(), path: '/car-musc-react-app/', name: 'Главная' },
    {
      id: uuid(),
      path: '/car-musc-react-app/wrapping',
      name: 'Оклейка автомобилей',
    },
    {
      id: uuid(),
      path: '/car-musc-react-app/detailing',
      name: 'Детейлинг автомобилей',
    },
    { id: uuid(), path: '/car-musc-react-app/gallery', name: 'Галерея работ' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Menu menu={menu} />

          <Burger />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
