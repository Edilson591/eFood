import { useParams } from "react-router-dom";
// import { productsRest } from "../../../component/data/productList";
import Hero from "../../../component/Hero";
import BackgroundHeader from "../../../assets/fundo.png";
import logoEfood from "../../../assets/logo.png";
import * as S from "./styles";
import { Container } from "../../../styles/global";
import { SectionProduct } from "../../../component/Sections/SectionProducts/styles";
import CardFood from "../../../component/CardFood";
import { useState } from "react";
import ModalProducts from "../../../component/ModalProducts";
import { ProductFood } from "../../../component/store/ListSubItens";
// import { useListRestaurantes } from "../../../component/store/ListRestarurante";
import ComponentSnipper from "../../../component/ComponentSnipper";
import { useGetRestaurantesQuery } from "../../../services/apiRestaurantes";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../component/store";

interface PropsProductContent extends Record<string, string | undefined> {
  products: string;
}

const ProductContent = () => {
  const { products } = useParams<PropsProductContent>();
  // const { carrinho } = useListSubItens();
  // const { restaurantes, fetchRestaurantes } = useListRestaurantes();
  const { data, isLoading } = useGetRestaurantesQuery();
  const conteudoProduct = data?.filter(
    (item) => item.titulo === products?.replace(/_/g, " ")
  );
  const { carrinho } = useSelector((state: RootReducer) => state.carrinho);
  const [modalProduct, setModalProduct] = useState<ProductFood | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"product" | "cart" | null>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // useEffect(() => {
  //   fetchRestaurantes();
  // }, [fetchRestaurantes]);

  const openProductModal = (item: ProductFood) => {
    setModalProduct(item);
    setIsModalOpen(true);
    setModalType("product");
    console.log(products?.replace(/_/g, " "));
  };
  const closeModal = () => {
    setModalProduct(null);
    setModalType(null);
    setIsModalOpen(false);
  };

  const openCartModal = () => {
    setIsModalOpen(true);
    setModalType("cart");
  };

  if (isLoading) return <ComponentSnipper />;

  return (
    <>
      <Hero $background={BackgroundHeader}>
        <Container>
          <S.ContainerHeaderProduct>
            <S.LinkRestaurante to="/">
              <h2>Restaurantes</h2>
            </S.LinkRestaurante>
            <S.LogoWrapper>
              <img src={logoEfood} alt="Logo efood" />
            </S.LogoWrapper>
            <S.ButtonModalLeft onClick={openCartModal} type="button">
              <span>{carrinho.length} produto(s) no carrinho</span>
            </S.ButtonModalLeft>
          </S.ContainerHeaderProduct>
        </Container>
        {conteudoProduct?.map((product, index) => (
          <S.WrapperImg key={index}>
            <S.Image src={product.capa} alt={product.titulo} />
            <Container>
              <S.ContainerTitle>
                <S.ContainerTypesFood>
                  <S.TypeFood>{product.tipo}</S.TypeFood>
                </S.ContainerTypesFood>
                <S.Title>{product.titulo}</S.Title>
              </S.ContainerTitle>
            </Container>
          </S.WrapperImg>
        ))}
      </Hero>
      <SectionProduct>
        <Container>
          <S.ListsFood>
            {conteudoProduct?.map((itensFood) =>
              itensFood.cardapio.map((item, index) => (
                <li key={index}>
                  <CardFood
                    title={item.nome}
                    descricao={item.descricao}
                    imageFood={item.foto}
                    porcao={item.porcao}
                    price={item.preco}
                    onClick={() => openProductModal(item)}
                  />
                </li>
              ))
            )}
          </S.ListsFood>
        </Container>
      </SectionProduct>
      <ModalProducts
        type={modalType}
        closeOverlay={handleOverlayClick}
        isOpen={isModalOpen}
        onClose={closeModal}
        product={modalProduct}
      />
    </>
  );
};

export default ProductContent;
