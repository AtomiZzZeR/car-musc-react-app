import { FC } from 'react';
import Styled from './BlockItem.styles';

export interface IBlock {
  id: string;
  icon: string;
  title: string;
  content: string;
  isButton?: boolean;
}

const BlockItem: FC<IBlock> = ({ icon, title, content, isButton }) => {
  return (
    <Styled.Wrapper>
      <Styled.BoxIcon>
        <img src={icon} alt={'icon'} />
      </Styled.BoxIcon>

      <Styled.Title>{title}</Styled.Title>

      <Styled.Content>{content}</Styled.Content>

      {isButton ? <Styled.Link href={'#'}>Подробнее</Styled.Link> : null}
    </Styled.Wrapper>
  );
};

export default BlockItem;
