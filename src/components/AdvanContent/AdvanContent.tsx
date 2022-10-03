import { FC } from 'react';
import Styled from './AdvanContent.styles';
import { v4 as uuid } from 'uuid';
import { Rhombs } from '../Rhombs';
import iconList from '../../assets/images/iconList.svg';
import iconBailer from '../../assets/images/iconBailer.svg';
import iconPasting from '../../assets/images/iconPasting.svg';

interface IBlock {
  id: string;
  icon: string;
  title: string;
  content: string;
  isRhombs?: boolean;
}

const AdvanContent: FC = () => {
  const blocks: IBlock[] = [
    {
      id: uuid(),
      icon: iconList,
      title: 'материалы от лучших компаний',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Pretium, rutrum est, molestie proin tristique duis sed. 
				Morbi suspendisse amet nisl vestibulum risus. Quis pretium`,
      isRhombs: true,
    },
    {
      id: uuid(),
      icon: iconBailer,
      title: 'Опытные мастера',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Et donec elementum egestas vitae ullamcorper. 
				Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. 
				Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus`,
      isRhombs: true,
    },
    {
      id: uuid(),
      icon: iconPasting,
      title: 'Гарантия на все виды работы',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Vestibulum volutpat.`,
    },
  ];

  return (
    <Styled.Wrapper>
      {blocks.map(({ id, icon, title, content, isRhombs }) => (
        <Styled.Block key={id}>
          <Styled.BoxMain>
            <Styled.BoxIcon>
              <img src={icon} alt={'icon'} />
            </Styled.BoxIcon>

            <Styled.Title>{title}</Styled.Title>
          </Styled.BoxMain>

          <Styled.Content>{content}</Styled.Content>

          {isRhombs ? (
            <Styled.Rhobms>
              <Rhombs />
            </Styled.Rhobms>
          ) : null}
        </Styled.Block>
      ))}
    </Styled.Wrapper>
  );
};

export default AdvanContent;
