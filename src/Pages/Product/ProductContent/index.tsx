import { useParams } from "react-router-dom";
import { productsRest } from "../../../component/data/productList";
import Hero from "../../../component/Hero";
import BackgroundHeader from "../../../assets/fundo.png";
import logoEfood from "../../../assets/logo.png";
import * as S from "./styles";
import { Container } from "../../../styles/global";
import { SectionProduct } from "../../../component/Sections/SectionProducts/styles";
import CardFood from "../../../component/CardFood";
import { useState } from "react";
import ModalProducts from "../../../component/ModalProducts";
import {
  Product,
  useListSubItens,
} from "../../../component/store/ListSubItens";

interface PropsProductContent extends Record<string, string | undefined> {
  products: string;
}

const ProductContent = () => {
  const { products } = useParams<PropsProductContent>();
  const { carrinho } = useListSubItens();
  const conteudoProduct = productsRest.filter(
    (item) => item.links === products
  );
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"product" | "cart" | null>(null)

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const openProductModal = (item: Product) => {
    setModalProduct(item);
    setIsModalOpen(true);
    setModalType("product")
  };
  const closeModal = () => {
    setModalProduct(null);
    setModalType(null)
    setIsModalOpen(false);
  };
  
  const openCartModal = () => {
    setIsModalOpen(true);
    setModalType("cart")
  }



  return (
    <>
      <Hero $background={BackgroundHeader}>
        <Container>
          <S.ContainerHeaderProduct>
            <h2>Restaurantes</h2>
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
            <S.Image src={product.productImg} alt={product.title} />
            <Container>
              <S.ContainerTitle>
                <S.ContainerTypesFood>
                  {product.tags.map((tag, index) => (
                    <S.TypeFood key={index}>{tag}</S.TypeFood>
                  ))}
                </S.ContainerTypesFood>
                <S.Title>{product.title}</S.Title>
              </S.ContainerTitle>
            </Container>
          </S.WrapperImg>
        ))}
      </Hero>
      <SectionProduct>
        <Container>
          <S.ListsFood>
            {conteudoProduct.map((itensFood) =>
              itensFood.items.map((item, index) => (
                <li key={index}>
                  <CardFood
                    title={item.title}
                    imageFood={item.imageFood}
                    description={item.description}
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
