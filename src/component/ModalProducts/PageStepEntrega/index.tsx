// import { Form } from "react-router-dom";
import { FormData } from "../../hooks/useFormConfig";
import ContainerInput from "../../Input";
import { ContainerEntrega, ContainerInputs, TitleEntregas } from "./styles";
import { useFormContext } from "react-hook-form";

const PageStepEntrega = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<FormData>();


  return (
    <ContainerEntrega>
      <TitleEntregas> Entrega</TitleEntregas>
      <ContainerInputs>
        <ContainerInput
          label="Quem irá receber"
          placeholder="Nome Completo ?"
          required
          control={control}
          error={errors.nomeCompleto?.message?.toString()}
          {...register("nomeCompleto")}
        />
        <ContainerInput
          label="Endereço"
          placeholder="Qual o endereço ?"
          required
          control={control}
          error={errors.endereco?.message}
          {...register("endereco")}
        />
        <ContainerInput
          label="cidade"
          placeholder="Qual a cidade ?"
          required
          control={control}
          error={errors.cidade?.message}
          {...register("cidade")}
        />
        <div className="input-horizontal">
          <ContainerInput
            label="CEP"
            placeholder="Qual o cep ?"
            required
            control={control}
            error={errors.cep?.message}
            {...register("cep")}
          />
          <ContainerInput
            label="Número"
            placeholder="Qual o número da casa ?"
            control={control}
            error={errors.numberCasa?.message}
            {...register("numberCasa")}
          />
        </div>
        <ContainerInput
          label="Complemento(opcional)"
          placeholder="Tem complemento ?"
          required
          control={control}
          error={errors.complemento?.message}
          {...register("complemento")}
        />
      </ContainerInputs>
    </ContainerEntrega>
  );
};

export default PageStepEntrega;
