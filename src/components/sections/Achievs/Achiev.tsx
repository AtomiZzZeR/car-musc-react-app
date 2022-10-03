import { FC } from 'react';
import { Rhombs } from '../../Rhombs';
import Styled from './Achievs.styles';
import { v4 as uuid } from 'uuid';
import icon from '../../../assets/images/icon-achiev.svg';

interface IBlock {
  id: string;
  title: string;
  icon?: string;
  content: string;
}

const Achiev: FC = () => {
  const title = '1';

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui`;

  const content1: IBlock[] = [
    { id: uuid(), title, content },
    { id: uuid(), title: '6', content },
    { id: uuid(), title: '2', content },
    { id: uuid(), title, content },
  ];

  const content2: IBlock[] = [
    { id: uuid(), title: '4', content },
    { id: uuid(), title: '3', content },
    { id: uuid(), title, content },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.BoxMain>
            <Styled.Title>
              наши достижения от кубка россии до чемпионатов мира
            </Styled.Title>

            <Rhombs />

            <Styled.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
              tincidunt aliquam tincidunt pretium sodales. Tristique odio
              pellentesque et tincidunt posuere arcu purus lobortis risus. Urna,
              ut amet odio orci magnis praesent ultrices. Praesent malesuada
              lacus tellus tristique sit at. Sed viverra nulla nam arcu, non
              iaculis pretium, volutpat.
            </Styled.Content>
          </Styled.BoxMain>

          <Styled.BoxBLocks>
            <Styled.FirstBox>
              {content1.map(({ id, title, content }) => (
                <Styled.Block key={id}>
                  <Styled.TitleBlock>
                    <Styled.TitleBlockInner>#</Styled.TitleBlockInner>
                    {title}
                  </Styled.TitleBlock>

                  <Styled.ContentBlock>{content}</Styled.ContentBlock>
                </Styled.Block>
              ))}
            </Styled.FirstBox>

            <Styled.SecondBox>
              {content2.map(({ id, title, content, icon }) => (
                <Styled.Block key={id}>
                  <Styled.TitleBlock>
                    <Styled.TitleBlockInner>#</Styled.TitleBlockInner>
                    {title}
                  </Styled.TitleBlock>

                  <Styled.ContentBlock>{content}</Styled.ContentBlock>
                </Styled.Block>
              ))}
              <Styled.Block>
                <Styled.Icon src={icon} alt={'goblet'} />

                <Styled.ContentBlock>{content}</Styled.ContentBlock>
              </Styled.Block>
            </Styled.SecondBox>
          </Styled.BoxBLocks>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Achiev;
