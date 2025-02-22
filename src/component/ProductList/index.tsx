import { Container } from "../../styles/global";
import CardProducts from "../CardProducts";
import * as S from "./styles";
// import { productsRest } from "../data/productList";
import SectionProducts from "../Sections/SectionProducts";
import { useEffect } from "react";

import { useListRestaurantes } from "../store/ListRestarurante";
import ComponentSnipper from "../ComponentSnipper";

const ProductList = () => {
  const { restaurantes, fetchRestaurantes } = useListRestaurantes();

  useEffect(() => {
    fetchRestaurantes();
  }, [fetchRestaurantes]);

  if (restaurantes.length === 0) return <ComponentSnipper />;

  return (
    <SectionProducts>
      <Container>
        <S.ListItens>
          {restaurantes?.map(
            (
              { avaliacao, capa, descricao, id, tipo, titulo, destacado },
              index
            ) => (
              <li key={index}>
                <CardProducts
                  title={titulo}
                  description={descricao}
                  assessment={avaliacao}
                  destacado={destacado}
                  links={titulo}
                  tags={tipo}
                  productImg={capa}
                  id={id}
                />
              </li>
            )
          )}
        </S.ListItens>
      </Container>
    </SectionProducts>
  );
};

export default ProductList;
