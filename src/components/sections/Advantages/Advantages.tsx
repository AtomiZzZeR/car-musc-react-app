import { FC } from 'react';
import { AdvanContent } from '../../AdvanContent';
import { Slider } from '../../Slider';
import Styled from './Advantages.styles';
import img from '../../../assets/images/imgMachine1.jpg';

const Advantages: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <AdvanContent />

          <Slider
            img={img}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Pellentesque auctor nibh feugiat est. Consectetur lectus.`}
          />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Advantages;
