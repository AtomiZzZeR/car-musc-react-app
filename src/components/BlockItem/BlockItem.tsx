import { FC } from 'react';
import Styled from './BlockItem.styles';

export interface IBlock {
  id: string;
  icon: string;
  title: string;
  content: string;
}

const BlockItem: FC<IBlock> = ({ icon, title, content }) => {
  return (
    <Styled.Wrapper>
      <Styled.BoxIcon>
        <img src={icon} alt={'icon'} />
      </Styled.BoxIcon>

      <Styled.Title>{title}</Styled.Title>

      <Styled.Content>{content}</Styled.Content>

      <Styled.Link href={'#'}>Подробнее</Styled.Link>
    </Styled.Wrapper>
  );
};

export default BlockItem;
