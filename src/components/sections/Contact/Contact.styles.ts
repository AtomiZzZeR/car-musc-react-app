import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme';

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 636px;
  height: 306px;
  text-transform: uppercase;
`;

const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 306px;
  padding: 12.5px 25px;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.primary};
  border: 1px solid ${EThemeColors.border};

  &::placeholder {
    color: ${EThemeColors.border};
  }

  &:focus {
    border: 1px solid ${EThemeColors.accent};
  }
`;

const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 526px;
  height: 150px;
  padding: 12.5px 25px;
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.primary};
  border: 1px solid ${EThemeColors.border};

  &::placeholder {
    color: ${EThemeColors.border};
  }

  &:focus {
    border: 1px solid ${EThemeColors.accent};
  }
`;

const BoxIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${EThemeColors.border};
`;

const BoxContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 13.5px 25px;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: ${EThemeColors.accent};
`;

const BoxInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 297.5px;
  height: 61px;
`;

const BoxItemInfo = styled.div`
  display: flex;
  align-items: center;
  &:last-child {
    margin: 0px 0px 0px 30px;
  }
`;

const Icon = styled.img`
  margin: 0px 10px 0px 0px;
`;

const TextInfo = styled.div``;

const StyledContact = {
  Wrapper,
  Container,
  Inner,
  Form,
  BoxMain,
  Input,
  BoxContent,
  TextArea,
  BoxIcons,
  Link,
  BoxContacts,
  Button,
  BoxInfo,
  BoxItemInfo,
  Icon,
  TextInfo,
};

export default StyledContact;
