import { FC } from 'react';
import { TitleSection } from '../../TitleSection';
import Styled from './Price.styles';

interface ICell {
  content: string;
}

const Price: FC = () => {
  const content = ['53 000 ₽', '64 000 ₽', '69 000 ₽', '72 000 ₽'];

  const dataTh: ICell[] = [
    { content: 'авто / Материал' },
    { content: 'Пленка Spectroll' },
    { content: 'Пленка Hexis' },
    { content: 'Пленка SunTek' },
    { content: 'Пленка LLumar' },
  ];
  const dataTd1: ICell[] = [
    { content: '1 класc (Mini cooper, Fiat 500)' },
    { content: content[0] },
    { content: content[1] },
    { content: content[2] },
    { content: content[3] },
  ];
  const dataTd2: ICell[] = [
    { content: '2 класс (BMW 3, Mercedes)' },
    { content: content[0] },
    { content: content[1] },
    { content: content[2] },
    { content: content[3] },
  ];
  const dataTd3: ICell[] = [
    { content: '4 класс (BMW 7, Mercedes S)' },
    { content: content[0] },
    { content: content[1] },
    { content: content[2] },
    { content: content[3] },
  ];
  const dataTd4: ICell[] = [
    { content: '5 класс (BMW X3,X4, Mercedes)' },
    { content: content[0] },
    { content: content[1] },
    { content: content[2] },
    { content: content[3] },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <TitleSection title={'Стоимость полной оклейки автомобиля'} />

          <Styled.Table>
            <Styled.Tr>
              {dataTh.map(({ content }) => (
                <Styled.Th>{content}</Styled.Th>
              ))}
            </Styled.Tr>
            <Styled.Tr>
              {dataTd1.map(({ content }) => (
                <Styled.Td>{content}</Styled.Td>
              ))}
            </Styled.Tr>
            <Styled.Tr>
              {dataTd2.map(({ content }) => (
                <Styled.Td>{content}</Styled.Td>
              ))}
            </Styled.Tr>
            <Styled.Tr>
              {dataTd3.map(({ content }) => (
                <Styled.Td>{content}</Styled.Td>
              ))}
            </Styled.Tr>
            <Styled.Tr>
              {dataTd3.map(({ content }) => (
                <Styled.Td>{content}</Styled.Td>
              ))}
            </Styled.Tr>
          </Styled.Table>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Price;
