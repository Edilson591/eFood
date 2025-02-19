
import { FormData } from "../hooks/useFormConfig";
import { Input } from "./styles";
import * as S from "./styles";
import { Control, Controller, FieldError, useFormContext } from "react-hook-form";

interface ContainerInputProps {
  label: string;
  placeholder?: string;
  name: keyof FormData;
  required?: boolean;
  error?: FieldError | string;
  control: Control<FormData>;
}

const ContainerInput = ({
  label,
  name,
  placeholder,
  required,
  control,
  error,
}: ContainerInputProps) => {
  const errorMessage = error
    ? typeof error === "string"
      ? error
      : error.message
    : "";


  const { clearErrors } = useFormContext<FormData>();
 

  return (
    <S.ContainerInput>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input
              {...field}
              placeholder={placeholder}
              required={required}
              onBlur={() => field.onBlur()}
              onFocus={() => clearErrors(name) }
            />
            {errorMessage && <span style={{color: '#000000'}}>{errorMessage}</span>}
          </>
        )}
      />
    </S.ContainerInput>
  );
};

export default ContainerInput;
