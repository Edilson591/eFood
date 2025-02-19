import * as S from "./styles";
import logoEfood from "../../assets/logo.png";
import { Container } from "../../styles/global";
import iconTwiter from "../../assets/icon-twitter.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <S.ContainerFooter>
      <Container>
        <div>
          <img src={logoEfood} alt="Logo efood" />
        </div>
        <S.ListContacts>
          <S.List>
            <S.LinkContacts href="#">
              <S.IconContacts src={iconInstagram} alt="iconi do instagram" />
            </S.LinkContacts>
          </S.List>
          <S.List>
            <S.LinkContacts href="#">
              <S.IconContacts src={iconFacebook} alt="iconi do Facebook" />
            </S.LinkContacts>
          </S.List>
          <S.List>
            <S.LinkContacts href="#">
              <S.IconContacts src={iconTwiter} alt="iconi do Twiter" />
            </S.LinkContacts>
          </S.List>
        </S.ListContacts>
        <S.InformationFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.InformationFooter>
      </Container>
    </S.ContainerFooter>
  );
};

export default Footer;
