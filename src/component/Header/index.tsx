import { Container } from "../../styles/global";
import * as S from "./styles";
import logoEfood from "../../assets/logo.png";
import Hero from "../Hero";
import BackgroundHeader  from "../../assets/fundo.png"

const Header = () => {
  return (
    <Hero $background={BackgroundHeader}>
    <Container>
      <S.ContainerHeader>
        <div>
          <img src={logoEfood} alt="Logo efood" />
        </div>
        <S.InformationHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </S.InformationHeader>
      </S.ContainerHeader>
    </Container>
  </Hero>
  );
};

export default Header;
