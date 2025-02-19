import CardFood from "../CardFood";
import { Product, useListSubItens } from "../store/ListSubItens";
import * as S from "./styles";
import butonCloseModal from "../../assets/close 1.svg";
import PageStepCard from "./PageStepCard";
import { useEffect, useState } from "react";
import PageStepEntrega from "./PageStepEntrega";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { ContainerForm } from "./PageStepEntrega/styles";
import { useFormConfig } from "../hooks/useFormConfig";
import PageStepCheckOut from "./PageStepCheckOut";
// import { stepPages } from "../data/stepPages";
import PagePedidoRealizado from "./PagePedidoRealizado";

export interface ProsModal {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  closeOverlay: (e: React.MouseEvent) => void;
  type: "product" | "cart" | null;
}

const ModalProducts = ({
  isOpen,
  onClose,
  product,
  closeOverlay,
  type,
}: ProsModal) => {
  const { carrinho, limparCarrinho, addCarrinho } = useListSubItens();
  const [currentStepPage, setCurrentStepPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false)
  const methods = useFormConfig();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(currentStepPage);
  }, [currentStepPage]);

  const handleConcluir = () => {
    setCurrentStepPage(1);
    limparCarrinho();
    onClose();
  };

  const handleNextStepPage = () => {
    if (currentStepPage === 3) {
      setIsLoading(true)
      setTimeout(() => {
        if (currentStepPage > 2 && !methods.formState.isValid) {
          setIsLoading(false)
          alert("Preencha todos os campos corretamente")
          return
        };
        setIsLoading(false)
        if (carrinho.length !== 0) setCurrentStepPage((prev) => prev + 1);
      }, 500);
    } else {
      if (carrinho.length !== 0) setCurrentStepPage((prev) => prev + 1);
    }
  };

  const handleprevStepPage = () => {
    setCurrentStepPage((prev) => (prev > 1 ? prev - 1 : 1));
    console.log(methods.watch());
  };

  return (
    <S.ModalOverlay $isVisible={isOpen} onClick={closeOverlay}>
      {type === "product" && product ? (
        <S.ContentModalProducts>
          <CardFood
            imageFood={product.imageFood}
            description={product.description}
            title={product.title}
            descriptionModal={product.descriptionModal}
            price={product.price}
            onClick={() => addCarrinho(product)}
            $isCardModal={true}
          />
          <S.ButtonCloseModal onClick={onClose}>
            <img src={butonCloseModal} alt="botao fecha modal" />
          </S.ButtonCloseModal>
        </S.ContentModalProducts>
      ) : type === "cart" ? (
        <S.ContentModalCart>
          {currentStepPage === 1 && (
            <PageStepCard onClick={handleNextStepPage} />
          )}
          {currentStepPage > 1 && currentStepPage < 4 && (
            <FormProvider {...methods}>
              <ContainerForm onSubmit={methods.handleSubmit(onSubmit)}>
                {currentStepPage === 2 && <PageStepEntrega />}
                {currentStepPage === 3 && <PageStepCheckOut />}
                {currentStepPage < 4 ? (
                  <S.ContainerButton>
                    <S.ButtonOrder
                      onClick={handleNextStepPage}
                      // disabled={!methods.formState.isValid}
                      type={currentStepPage === 3 ? "submit" : "button"}
                    >
                      {currentStepPage > 2
                        ? isLoading ? <span className="spinner"></span> : "Finalizar pagamento"
                        : "Continuar com o pagamento"}
                    </S.ButtonOrder>
                    <S.ButtonOrder onClick={handleprevStepPage} type="button">
                      {currentStepPage > 2
                        ? "Voltar para a edição de endereço"
                        : "Voltar para o carrinho"}
                    </S.ButtonOrder>
                  </S.ContainerButton>
                ) : (
                  <>
                    {currentStepPage === 4 && <PagePedidoRealizado />}
                    <S.ButtonOrder onClick={handleprevStepPage} type="button">
                      Concluir
                    </S.ButtonOrder>
                  </>
                )}
              </ContainerForm>
            </FormProvider>
          )}
          {currentStepPage === 4 && (
            <>
              <PagePedidoRealizado />
              <S.ButtonOrder onClick={handleConcluir} type="button">
                Concluir
              </S.ButtonOrder>
            </>
          )}
        </S.ContentModalCart>
      ) : null}
    </S.ModalOverlay>
  );
};

export default ModalProducts;
