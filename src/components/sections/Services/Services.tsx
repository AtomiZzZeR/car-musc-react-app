import { FC } from 'react';
import { BlockItem } from '../../BlockItem';
import { TitleSection } from '../../TitleSection';
import Styled from './Services.styles';
import { v4 as uuid } from 'uuid';
import iconWash from '../../../assets/images/iconWash.svg';
import iconList from '../../../assets/images/iconList.svg';
import iconBailer from '../../../assets/images/iconBailer.svg';
import iconPasting from '../../../assets/images/iconPasting.svg';
import { IBlock } from '../../BlockItem/BlockItem';

const Services: FC = () => {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nascetur ultrices pellentesque vulputate sit. Ut feugiat.`;

  const blocks: IBlock[] = [
    {
      id: uuid(),
      icon: iconWash,
      title: 'Защитные пленки',
      content,
    },
    {
      id: uuid(),
      icon: iconList,
      title: 'Цветные пленки',
      content,
    },
    {
      id: uuid(),
      icon: iconBailer,
      title: 'Дизайн',
      content,
    },
    {
      id: uuid(),
      icon: iconPasting,
      title: 'Оклейка салона',
      content,
    },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <TitleSection title={'Наши услуги'} />

          <Styled.BoxButtons>
            <Styled.Button>Оклейка</Styled.Button>
            <Styled.Button>Детейлинг</Styled.Button>
          </Styled.BoxButtons>

          <Styled.BoxBlocks>
            {blocks.map(({ id, icon, title, content }) => (
              <BlockItem id={id} icon={icon} title={title} content={content} key={id} />
            ))}
          </Styled.BoxBlocks>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Services;
