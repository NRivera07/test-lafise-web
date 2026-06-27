import { Account } from "@/types/account";
import { TransferFormValues } from "@/types/transfer";
import { UseFormRegister } from "react-hook-form";
import FloatingInput from "../../ui/FloatingInput";

interface Props {
  register: UseFormRegister<TransferFormValues>;
  selectedAccount?: Account;
  error?: string;
  value?: number;
}

export default function AmountInput({
  register,
  selectedAccount,
  error,
  value,
}: Props) {
  return (
    <FloatingInput
      type="number"
      label="Monto"
      value={value}
      error={error}
      placeholder="0.00"
      {...register("amount", {
        required: "El monto es obligatorio",
        valueAsNumber: true,
        min: {
          value: 1,
          message: "Debe ser mayor a cero",
        },
        validate: (value) =>
          !selectedAccount ||
          value <= Number(selectedAccount.balance) ||
          "Saldo insuficiente",
      })}
    />
  );
}
