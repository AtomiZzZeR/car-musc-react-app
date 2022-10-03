import { FC } from 'react';
import { AdvanContent } from '../../AdvanContent';
import { Slider } from '../../Slider';
import Styled from '../Advantages/Advantages.styles';
import img from '../../../assets/images/imgMachine2.jpg';

const Advantages2: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Slider
            img={img}
            content={`Neque metus vitae urna purus aliquam. 
							Felis nullam pellentesque ac mi commodo, amet, porta in. Dui.`}
          />

          <AdvanContent />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Advantages2;
