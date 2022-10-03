import { FC } from 'react';
import Styled from './Slider.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface ISliderProps {
  img: string;
  content: string;
}

const Slider: FC<ISliderProps> = ({ img, content }) => {
  return (
    <Styled.Wrapper>
      <Styled.Img src={img} alt={'machine'} />

      <Styled.BoxContent>
        <Styled.BoxButton>
          <Styled.Button>
            <Styled.Icon>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Styled.Icon>
          </Styled.Button>
        </Styled.BoxButton>

        <Styled.Content>{content}</Styled.Content>

        <Styled.BoxButton>
          <Styled.Button>
            <Styled.ReverseIcon>
              <FontAwesomeIcon icon={faAngleLeft} />
            </Styled.ReverseIcon>
          </Styled.Button>
        </Styled.BoxButton>
      </Styled.BoxContent>
    </Styled.Wrapper>
  );
};

export default Slider;
