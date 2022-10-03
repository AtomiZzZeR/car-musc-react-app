import { FC } from 'react';
import Styled from './Slider.styles';
import { v4 as uuid } from 'uuid';
import img1 from '../../../assets/images/img1-slider.jpg';
import img2 from '../../../assets/images/img2-slider.jpg';
import img3 from '../../../assets/images/img3-slider.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface IBlock {
  id: string;
  img: string;
  content: string;
}

const Slider: FC = () => {
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Cras vulputate laoreet sapien a sit ante.`;

  const blocks: IBlock[] = [
    { id: uuid(), img: img1, content },
    { id: uuid(), img: img2, content },
    { id: uuid(), img: img3, content },
  ];

  return (
    <Styled.Wrapper>
      <Styled.BoxSlider>
        <Styled.BoxButton>
          <Styled.Button>
            <Styled.Icon>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Styled.Icon>
          </Styled.Button>
        </Styled.BoxButton>

        <Styled.Container>
          <Styled.Inner>
            {blocks.map(({ id, img, content }) => (
              <Styled.Block key={id}>
                <img src={img} alt={'machine'} />

                <Styled.Rectangle>
                  <Styled.Content>{content}</Styled.Content>
                </Styled.Rectangle>
              </Styled.Block>
            ))}
          </Styled.Inner>
        </Styled.Container>

        <Styled.BoxButton>
          <Styled.Button>
            <Styled.ReverseIcon>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Styled.ReverseIcon>
          </Styled.Button>
        </Styled.BoxButton>
      </Styled.BoxSlider>
    </Styled.Wrapper>
  );
};

export default Slider;
