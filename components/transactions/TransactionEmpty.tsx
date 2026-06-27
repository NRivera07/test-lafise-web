import { Inbox } from "lucide-react";

export default function TransactionEmpty() {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-md border border-[#DFE1DF] bg-white px-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EDF5F2]">
        <Inbox size={36} strokeWidth={1.8} className="text-[#3B8668]" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-text-primary">
        No hay transacciones
      </h3>

      <p className="mt-2 max-w-sm text-center text-sm text-text-secondary">
        Cuando realices una transferencia o movimiento, aparecerá listado aquí.
      </p>
    </div>
  );
}
