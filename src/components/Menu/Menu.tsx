import { FC } from 'react';
import Styled from './Menu.styles';
import { Link } from 'react-router-dom';

export interface ILink {
  id: string;
  path: string;
  name: string;
}

interface IMenuProps {
  menu: ILink[];
}

const Menu: FC<IMenuProps> = ({ menu }) => {
  return (
    <Styled.Wrapper>
      {menu.map(({ id, path, name }) => (
        <Link to={path} key={id}>
          <Styled.InnerLink>{name}</Styled.InnerLink>
        </Link>
      ))}
    </Styled.Wrapper>
  );
};

export default Menu;
