import { Container } from "../../styles/global";
import CardProducts from "../CardProducts";
import * as S from "./styles";
import SectionProducts from "../Sections/SectionProducts";
import ComponentSnipper from "../ComponentSnipper";
import { useGetRestaurantesQuery } from "../../services/apiRestaurantes";

const ProductList = () => {
  const {data,isLoading,isError} = useGetRestaurantesQuery()

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
