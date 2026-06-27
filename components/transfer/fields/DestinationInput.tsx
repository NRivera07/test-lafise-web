import FloatingInput from "@/components/ui/FloatingInput";
import { TransferFormValues } from "@/types/transfer";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<TransferFormValues>;
  value?: string;
  error?: string;
}

export default function DestinationInput({ register, value, error }: Props) {
  return (
    <FloatingInput
      label="Cuenta destino"
      value={value}
      error={error}
      type="number"
      placeholder="Número de cuenta"
      {...register("destination", {
        required: "La cuenta destino es obligatoria",
        minLength: {
          value: 6,
          message: "Número de cuenta inválido",
        },
      })}
    />
  );
}
