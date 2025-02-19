import { useFormContext } from "react-hook-form";
import ContainerInput from "../../Input";
import { useListSubItens } from "../../store/ListSubItens";
import * as S from "./styles";
import { FormData } from "../../hooks/useFormConfig";

const PageStepCheckOut = () => {
  const { carrinho } = useListSubItens();
  const priceTotal = carrinho.reduce((acc, item) => acc + item.price, 0);
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<FormData>();
  return (
    <S.ContainerCheckOut>
      <S.CheckPagamento>
        Pagamento - Valor a pagar {priceTotal}
      </S.CheckPagamento>
      <S.ContainerForm>
        <ContainerInput
          label="Nome no cartão"
          placeholder="Qual nome no cartão ?"
          required
          control={control}
          error={errors.nomeCart?.message}
          {...register("nomeCart")}
        />
        <div className="input-Number">
          <ContainerInput
            label="Número do cartão"
            placeholder="Qual o numero do carta ?"
            required
            control={control}
            error={errors.numeroCart?.message}
            {...register("numeroCart")}
          />
          <ContainerInput
            label="CVV"
            placeholder="Número?"
            required
            control={control}
            error={errors.cartCvv?.message}
            {...register("cartCvv")}
          />
        </div>
        <div className="input-year">
          <ContainerInput
            label="Mês de vencimento"
            placeholder="Mês que vence ?"
            required
            control={control}
            error={errors.cartMes?.message}
            {...register("cartMes")}
          />
          <ContainerInput
            label="Ano de vencimento"
            placeholder="Ano que vence ?"
            required
            control={control}
            error={errors.CartAno?.message}
            {...register("CartAno")}
          />
        </div>
      </S.ContainerForm>
    </S.ContainerCheckOut>
  );
};

export default PageStepCheckOut;
