import { FormData } from "../hooks/useFormConfig";

export const stepPages: Record<number, (keyof FormData)[]> = {
    1: [
      "nomeCompleto",
      "endereco",
      "cidade",
      "cep",
      "numberCasa",
      "complemento",
    ],
    2: ["nomeCart","numeroCart","cartCvv","CartAno","cartMes"]
  };