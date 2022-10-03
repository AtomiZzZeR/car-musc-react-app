import { FC, FormEvent } from 'react';
import { TitleSection } from '../../TitleSection';
import Styled from './Contact.styles';
import iconTg from '../../../assets/images/telegram.svg';
import iconYt from '../../../assets/images/youtube.svg';
import iconVk from '../../../assets/images/vkontakte.svg';
import iconLoc from '../../../assets/images/location.svg';
import iconPhone from '../../../assets/images/phone.svg';
import iconMail from '../../../assets/images/mail.svg';

const Contact: FC = () => {
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <TitleSection title={'Ответим на любой вопрос'} />

          <Styled.Form>
            <Styled.BoxMain>
              <Styled.Input type={'text'} placeholder={'Имя'} />
              <Styled.Input type={'text'} placeholder={'Телефон'} />
            </Styled.BoxMain>

            <Styled.BoxContent>
              <Styled.TextArea placeholder={'Вопрос по дизайну, тюнингу и др.'} />

              <Styled.BoxIcons>
                <Styled.Link href={'https://t.me/Yleephac'} target={'_blank'}>
                  <img src={iconTg} alt={'telegram'} />
                </Styled.Link>
                <Styled.Link href={'https://www.youtube.com/channel/UCP3pg4AucaTjVUlSaeoyAvA'} target={'_blank'}>
                  <img src={iconYt} alt={'youtube'} />
                </Styled.Link>
                <Styled.Link href={'https://vk.com/siolisme'} target={'_blank'}>
                  <img src={iconVk} alt={'vkontakte'} />
                </Styled.Link>
              </Styled.BoxIcons>
            </Styled.BoxContent>

            <Styled.BoxContacts>
              <Styled.Button onClick={handleClick}>Отправить</Styled.Button>

              <Styled.BoxInfo>
                <Styled.BoxItemInfo>
                  <Styled.Icon src={iconLoc} alt={'location'} />
                  <Styled.TextInfo>Eu faucibus et rutrum fringilla orci nunc</Styled.TextInfo>
                </Styled.BoxItemInfo>

                <Styled.BoxItemInfo>
                  <Styled.Icon src={iconPhone} alt={'phone'} />
                  <Styled.TextInfo>8 (812) 123-45-67</Styled.TextInfo>
                </Styled.BoxItemInfo>

                <Styled.BoxItemInfo>
                  <Styled.Icon src={iconMail} alt={'mail'} />
                  <Styled.TextInfo>test@test.ru</Styled.TextInfo>
                </Styled.BoxItemInfo>
              </Styled.BoxInfo>
            </Styled.BoxContacts>
          </Styled.Form>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Contact;
