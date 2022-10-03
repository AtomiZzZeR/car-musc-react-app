import React from 'react';
import { Menu } from '../Menu';
import Styled from './Footer.styles';
import { ILink } from '../Menu/Menu';
import { v4 as uuid } from 'uuid';

const Footer = () => {
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
          <Styled.Copyright>
            2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
          </Styled.Copyright>

          <Menu menu={menu} />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Footer;
