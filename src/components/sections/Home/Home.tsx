import { FC } from 'react';
import { Rhombs } from '../../Rhombs';
import Styled from './Home.styles';

interface IBlock {
  title: string;
  firstInfo: string;
  secondInfo?: string;
}

const Home: FC = () => {
  const info: IBlock[] = [
    {
      title: 'адрес:',
      firstInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      title: 'телефон:',
      firstInfo: '8 (812) 123-45-67',
      secondInfo: '8-911-123-45-67',
    },
    {
      title: 'Режим работы:',
      firstInfo: 'пн-пт : 10:00 - 20:00',
      secondInfo: 'сб-вск : 12:00 - 20:00',
    },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Title>CAR MUSC</Styled.Title>

          <Rhombs />

          <Styled.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci
            urna amet penatibus.
          </Styled.Content>

          <Styled.Link href={'#'}>Наши услуги</Styled.Link>
        </Styled.Inner>
      </Styled.Container>

      <Styled.WrapperBox>
        <Styled.BoxBLocks>
          {info.map(({ title, firstInfo, secondInfo }) => (
            <Styled.Block key={title}>
              <Styled.TitleBlock>{title}</Styled.TitleBlock>

              <Styled.InfoBlock>{firstInfo}</Styled.InfoBlock>

              {secondInfo ? (
                <Styled.InfoBlock>{secondInfo}</Styled.InfoBlock>
              ) : null}
            </Styled.Block>
          ))}
        </Styled.BoxBLocks>
      </Styled.WrapperBox>
    </Styled.Wrapper>
  );
};

export default Home;
