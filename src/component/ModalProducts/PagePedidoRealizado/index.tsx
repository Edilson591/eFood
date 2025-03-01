import { DescritionPedidoRealizado, HeaderPedidoRealizado } from "./styles";

const PagePedidoRealizado = () => {
  
  return (
    <>
      <HeaderPedidoRealizado>
        Pedido realizado - (ORDER_ID)
      </HeaderPedidoRealizado>
      <DescritionPedidoRealizado>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </DescritionPedidoRealizado>
      <DescritionPedidoRealizado>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.{" "}
      </DescritionPedidoRealizado>
      <DescritionPedidoRealizado>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </DescritionPedidoRealizado>
      <DescritionPedidoRealizado>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </DescritionPedidoRealizado>
    </>
  );
};

export default PagePedidoRealizado;
