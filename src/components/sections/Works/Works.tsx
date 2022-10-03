import { FC } from 'react';
import { TitleSection } from '../../TitleSection';
import Styled from './Works.styles';
import { v4 as uuid } from 'uuid';
import img1 from '../../../assets/images/works-section/img1.jpg';
import img2 from '../../../assets/images/works-section/img2.jpg';
import img3 from '../../../assets/images/works-section/img3.jpg';
import img4 from '../../../assets/images/works-section/img4.jpg';
import img5 from '../../../assets/images/works-section/img5.jpg';
import img6 from '../../../assets/images/works-section/img6.jpg';

interface IImgBlock {
  id: string;
  img: string;
}

const Works: FC = () => {
  const blocks: IImgBlock[] = [
    { id: uuid(), img: img1 },
    { id: uuid(), img: img2 },
    { id: uuid(), img: img3 },
    { id: uuid(), img: img4 },
    { id: uuid(), img: img5 },
    { id: uuid(), img: img6 },
    { id: uuid(), img: img6 },
    { id: uuid(), img: img5 },
    { id: uuid(), img: img4 },
    { id: uuid(), img: img3 },
    { id: uuid(), img: img2 },
    { id: uuid(), img: img1 },
    { id: uuid(), img: img1 },
    { id: uuid(), img: img2 },
    { id: uuid(), img: img3 },
    { id: uuid(), img: img4 },
    { id: uuid(), img: img5 },
    { id: uuid(), img: img6 },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <TitleSection title={'Наши работы'} />
        </Styled.Inner>
      </Styled.Container>
      <Styled.BoxContent>
        {blocks.map(({ id, img }) => (
          <Styled.BoxImg key={id}>
            <img src={img} alt={'machine'} />
          </Styled.BoxImg>
        ))}
      </Styled.BoxContent>
    </Styled.Wrapper>
  );
};

export default Works;
