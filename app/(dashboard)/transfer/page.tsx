import TransferForm from "@/components/transfer/TransferForm";

export default function TransferPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-[20px] font-semibold text-text-primary">
        Transferir
      </h1>

      <TransferForm />
    </section>
  );
}
