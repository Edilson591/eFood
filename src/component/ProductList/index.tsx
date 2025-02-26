import { Container } from "../../styles/global";
import CardProducts from "../CardProducts";
import * as S from "./styles";
// import { productsRest } from "../data/productList";
import SectionProducts from "../Sections/SectionProducts";
import { useEffect } from "react";

// import { useListRestaurantes } from "../store/ListRestarurante";
import ComponentSnipper from "../ComponentSnipper";
import { useGetRestaurantesQuery } from "../../services/apiRestaurantes";

const ProductList = () => {
  // const { restaurantes, fetchRestaurantes } = useListRestaurantes();
  const {data,isLoading,isError} = useGetRestaurantesQuery()

  useEffect(() => {
    console.log(data)
    
  }, [data]);

  if (isLoading) return <ComponentSnipper />;
  if(isError) return <h2>Ocorreu um erro ao carregar os restaurantes</h2>

  return (
    <SectionProducts>
      <Container>
        <S.ListItens>
          {data && data.length> 0  && data.map(
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
