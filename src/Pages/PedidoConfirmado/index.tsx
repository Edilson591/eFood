import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import { useEffect } from "react";
import SectionProducts from "../../component/Sections/SectionProducts";
import * as S from "./styles";

type Product = {
  id: number;
  price: number;
};

type Address = {
  city: string;
  complement: string;
  description: string;
  number: number;
  zipCode: string;
};

type Delivery = {
  receiver: string;
  address: Address;
};

type CardPayment = {
  code: number;
  expires: {
    month: number;
    year: number;
  };
  name: string;
  number: string;
};

type Payment = {
  card: CardPayment;
};

type Order = {
  products: Product[];
  delivery: Delivery;
  payment: Payment;
};

const ConfirmacaoPedido = () => {
  const localition = useLocation();
  const navigate = useNavigate();
  const pedido: Order = localition.state;

  useEffect(() => {
    if (!pedido) {
      navigate("/");
    }

    console.log(pedido);
  }, [navigate, pedido]);

  return (
    <>
      <Header />
      <SectionProducts>
        <S.OrderContainer>
          <S.Title>Obrigado pelo pedido no eFood!</S.Title>
          <S.Section>
            <S.Label>Destinatário:</S.Label>
            <p>{pedido.delivery.receiver}</p>
          </S.Section>
          <S.Section>
            <S.Label>Produtos:</S.Label>
            {pedido.products.map((product, index) => (
              <p key={index}>
                ID: {product.id} - Preço: R$ {product.price.toFixed(2)}
              </p>
            ))}
          </S.Section>
          <S.Section>
            <S.Label>Endereço de Entrega:</S.Label>
            <p>{`${pedido.delivery.address.description}, ${pedido.delivery.address.number}, ${pedido.delivery.address.city}`}</p>
            <p>Complemento: {pedido.delivery.address.complement}</p>
            <p>CEP: {pedido.delivery.address.zipCode}</p>
          </S.Section>
          <S.Section>
            <S.Label>Pagamento:</S.Label>
            <p>Nome no Cartão: {pedido.payment.card.name}</p>
            <p>Número: **** **** **** {pedido.payment.card.number.slice(-4)}</p>
            <p>
              Validade: {pedido.payment.card.expires.month}/
              {pedido.payment.card.expires.year}
            </p>
          </S.Section>
        </S.OrderContainer>
      </SectionProducts>
    </>
  );
};

export default ConfirmacaoPedido;
