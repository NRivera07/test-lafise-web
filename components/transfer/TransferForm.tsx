"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { useAccounts } from "@/hooks/useAccounts";
import { useTransferStore } from "@/store/transfer.store";
import { useUserStore } from "@/store/user.store";
import TransferStepper from "./TransferStepper";
import OriginAccountSelect from "./fields/OriginAccountSelect";
import DestinationInput from "./fields/DestinationInput";
import AmountInput from "./fields/AmountInput";
import TransferActions from "./TransferAction";
import { TransferFormValues } from "@/types/transfer";
import TransactionTypeSelect from "./fields/TransactionTypeSelect";
import TransferConfirmModal from "./TransferConfirmationModal";
import { useTransfer } from "@/hooks/useTransfer";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function TransferForm() {
  const user = useUserStore((state) => state.user);

  const route = useRouter();
  const setTransfer = useTransferStore((state) => state.setTransfer);
  const addTransaction = useTransferStore((state) => state.addTransaction);

  const [open, setOpen] = useState(false);

  const { mutateAsync, isPending } = useTransfer();
  
  const accountQueries = useAccounts(
    user?.products.map((product) => product.id) ?? [],
  );

  const accounts = useMemo(
    () => accountQueries.flatMap((query) => query.data ?? []),
    [accountQueries],
  );

  // Se establece el paso 4 para mantener la apariencia definida en el Figma,
  // donde los tres pasos anteriores se muestran como completados.
  const currentStep = 4;

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TransferFormValues>({
    defaultValues: {
      transactionType: "",
      origin: "",
      destination: "",
      amount: undefined,
    },
  });

  const selectedOrigin = watch("origin");
  const destination = watch("destination");
  const amount = watch("amount");

  const selectedAccount = accounts.find(
    (account) => account.account_number === selectedOrigin,
  );

  const onSubmit = (data: TransferFormValues) => {
    if (!selectedAccount) return;

    setTransfer({
      origin: data.origin,
      destination: data.destination,
      amount: Number(data.amount),
      currency: selectedAccount.currency,
    });

    setOpen(true);
  };

  const handleConfirm = async () => {
    const transfer = useTransferStore.getState().transfer;

    if (!transfer) {
      toast.error("No se encontró la información de la transferencia.");
      return;
    }

    try {
      const transaction = await mutateAsync({
        origin: transfer.origin,
        destination: transfer.destination,
        amount: {
          currency: transfer.currency,
          value: transfer.amount,
        },
      });

      addTransaction(transaction);

      toast.success(
        `Transferencia número ${transaction.transaction_number} realizada correctamente.`,
      );

      setOpen(false);

      route.push("/");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "No fue posible realizar la transferencia.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-md border border-[#DFE1DF] bg-white"
    >
      <TransferStepper currentStep={currentStep} />
      <section className="bg-[#F9FAF9] grid grid-cols-2 gap-10 border border-[#DFE1DF] px-12 py-8">
        <TransactionTypeSelect control={control} />
        <OriginAccountSelect
          key="origin"
          control={control}
          accounts={accounts}
        />
      </section>
      <section className="grid grid-cols-2 gap-10 px-12 py-8">
        <DestinationInput
          register={register}
          error={errors.destination?.message}
          value={destination}
        />

        <AmountInput
          register={register}
          error={errors.amount?.message}
          selectedAccount={selectedAccount}
          value={amount}
        />
      </section>

      <TransferActions />
      <TransferConfirmModal
        open={open}
        loading={isPending}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </form>
  );
}
