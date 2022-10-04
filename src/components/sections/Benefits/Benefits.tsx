import { FC } from 'react';
import { BlockItem } from '../../BlockItem';
import { Rhombs } from '../../Rhombs';
import Styled from './Benefits.styles';
import { v4 as uuid } from 'uuid';
import { IBlock } from '../../BlockItem/BlockItem';
import { TitleSection } from '../../TitleSection';
import icon1 from '../../../assets/images/iconWash.svg';
import icon2 from '../../../assets/images/iconList.svg';
import icon3 from '../../../assets/images/iconBailer.svg';
import icon4 from '../../../assets/images/iconPasting.svg';

const Benefits: FC = () => {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Nascetur ultrices pellentesque vulputate sit. Ut feugiat.`;

  const blocks: IBlock[] = [
    { id: uuid(), icon: icon1, title: 'Ipsum convallis', content },
    { id: uuid(), icon: icon2, title: 'Felis purus', content },
    { id: uuid(), icon: icon3, title: 'Enim praesent', content },
    { id: uuid(), icon: icon4, title: 'Aliquam tellus', content },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <TitleSection title={'Преимущества защитной антигравийной пленки'} />

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

export default Benefits;
