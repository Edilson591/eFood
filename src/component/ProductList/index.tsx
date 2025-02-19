import { Container } from "../../styles/global";
import CardProducts from "../CardProducts";
import * as S from "./styles";
import { productsRest } from "../data/productList";
import SectionProducts from "../Sections/SectionProducts";

const ProductList = () => {
  return (
    <SectionProducts>
      <Container>
        <S.ListItens>
          {productsRest?.map(
            (
              { title, assessment, description, links, productImg, tags,id },
              index
            ) => (
              <CardProducts
                key={index}
                title={title}
                description={description}
                assessment={assessment}
                links={links}
                tags={tags} 
                productImg={productImg}
                id={id}
              />
            )
          )}
        </S.ListItens>
      </Container>
    </SectionProducts>
  );
};

export default ProductList;
