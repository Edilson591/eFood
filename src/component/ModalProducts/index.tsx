import CardFood from "../CardFood";
import { ProductFood } from "../store/ListSubItens";
import * as S from "./styles";
import butonCloseModal from "../../assets/close 1.svg";
import PageStepCard from "./PageStepCard";
import { useState } from "react";
import PageStepEntrega from "./PageStepEntrega";
import { FieldValues, FormProvider, SubmitHandler } from "react-hook-form";
import { ContainerForm } from "./PageStepEntrega/styles";
import { useFormConfig } from "../hooks/useFormConfig";
import PageStepCheckOut from "./PageStepCheckOut";
import { AnimatePresence, motion } from "framer-motion";
import PagePedidoRealizado from "./PagePedidoRealizado";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import { addCarrinho, limparCarrinho } from "../store/reducers/carrinho";
import { useCheckOutMutation } from "../../services/apiRestaurantes";
import { useNavigate } from "react-router-dom";

export interface ProsModal {
  product: ProductFood | null;
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
  const { carrinho } = useSelector((state: RootReducer) => state.carrinho);
  const dispatch = useDispatch();
  const [currentStepPage, setCurrentStepPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useFormConfig();
  const [checkout, { isLoading: isLoadingCheckOut,}] =
    useCheckOutMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleFinish = async () => {
    const response = await fetch(
      "https://fake-api-tau.vercel.app/api/efood/checkout"
    );
    if (!response.ok) {
      throw new Error("Error ao Busca dados");
    }
    const dataCheckOut = await response.json();

    try {
      if (dataCheckOut) {
        await checkout(dataCheckOut).unwrap();
        alert("Compra realizada com sucesso!");
        navigate("/confirmacao", { state: dataCheckOut });
      }
    } catch (error) {
      alert("Ocorreu um erro ao concluir a compra.");
      console.log(error);
    }
  };

  const handleConcluir = () => {
    setCurrentStepPage(1);
    dispatch(limparCarrinho());
    onClose();
    handleFinish();
  };

  const handleNextStepPage = () => {
    if (currentStepPage === 3) {
      setIsLoading(true);
      setTimeout(() => {
        if (currentStepPage > 2 && !methods.formState.isValid) {
          setIsLoading(false);
          alert("Preencha todos os campos corretamente");
          return;
        }
        setIsLoading(false);
        if (carrinho.length !== 0) setCurrentStepPage((prev) => prev + 1);
      }, 500);
    } else {
      if (carrinho.length !== 0) setCurrentStepPage((prev) => prev + 1);
    }
  };

  const handleprevStepPage = () => {
    setCurrentStepPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <S.ModalOverlay $isVisible={isOpen} onClick={closeOverlay}>
      {type === "product" && product ? (
        <S.ContentModalProducts>
          <CardFood
            imageFood={product.foto}
            title={product.nome}
            descricao={product.descricao}
            price={product.preco}
            onClick={() => dispatch(addCarrinho(product))}
            $isCardModal={true}
            porcao={product.porcao}
          />
          <S.ButtonCloseModal onClick={onClose}>
            <img src={butonCloseModal} alt="botao fecha modal" />
          </S.ButtonCloseModal>
        </S.ContentModalProducts>
      ) : type === "cart" ? (
        <S.ContentModalCart>
          <AnimatePresence>
            <motion.div
              key={currentStepPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                          type={currentStepPage === 3 ? "submit" : "button"}
                        >
                          {currentStepPage > 2 ? (
                            isLoading ? (
                              <span className="spinner"></span>
                            ) : (
                              "Finalizar pagamento"
                            )
                          ) : (
                            "Continuar com o pagamento"
                          )}
                        </S.ButtonOrder>
                        <S.ButtonOrder
                          onClick={handleprevStepPage}
                          type="button"
                        >
                          {currentStepPage > 2
                            ? "Voltar para a edição de endereço"
                            : "Voltar para o carrinho"}
                        </S.ButtonOrder>
                      </S.ContainerButton>
                    ) : (
                      <>
                        {currentStepPage === 4 && <PagePedidoRealizado />}
                        <S.ButtonOrder
                          onClick={handleprevStepPage}
                          type="button"
                          disabled={isLoadingCheckOut}
                        >
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
            </motion.div>
          </AnimatePresence>
        </S.ContentModalCart>
      ) : null}
    </S.ModalOverlay>
  );
};

export default ModalProducts;
