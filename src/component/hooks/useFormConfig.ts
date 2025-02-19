import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

const date = new Date().getFullYear();

const schema = z.object({
  nomeCompleto: z.string().min(5, "Nome Inválido"),
  endereco: z.string().min(5, "Endereço Inválido"),
  cidade: z.string().min(3, "Cidade Inválido"),
  cep: z
    .string()
    .regex(/^\d{5}-\d{3}$/, "CEP inválido. Use o formato 00000-000"),
  numberCasa: z.string().optional().or(z.literal("")),

  complemento: z.string().or(z.literal("")),
  nomeCart: z.string().min(6, "Nome Inválido"),
  numeroCart: z
    .string()
    .min(13, "O número do cartão deve ter pelo menos 13 dígitos.")
    .max(19, "O número do cartão deve ter no máximo 19 dígitos.")
    .regex(/^\d+$/, "O número do cartão deve conter apenas dígitos."),
  cartCvv: z
    .string()
    .length(3, "O CVV deve ter 3 dígitos.")
    .regex(/^\d+$/, "O CVV deve conter apenas números."),
  cartMes: z
    .string()
    .regex(/^(0?[1-9]|1[0-2])$/, "O mês deve ser entre 1 e 12.")
    .transform((val) => Number(val)),
  CartAno: z
    .string()
    .regex(/^\d{4}$/, "O ano deve ter 4 dígitos.")
    .transform((val) => {
      const num = Number(val);
      if (num < date)
        throw new Error(`O ano deve ser maior ou igual a ${date}`);
      if (num > date + 20)
        throw new Error(
          "O ano de vencimento não pode ser mais do que 20 anos à frente"
        );
      return num;
    }),
});

export type FormData = z.infer<typeof schema>;

export const useFormConfig = (): UseFormReturn<FormData> => {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nomeCompleto: "",
      endereco: "",
      cidade: "",
      cep: "",
      numberCasa: "",
      complemento: "",
    },
    mode: "all",
  });

  //   console.log(methods.getValues())

  return methods;
};
