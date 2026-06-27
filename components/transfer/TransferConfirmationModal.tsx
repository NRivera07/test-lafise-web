"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { Loader2 } from "lucide-react";
import { useTransferStore } from "@/store/transfer.store";

interface Props {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function TransferConfirmModal({
  open,
  loading = false,
  onClose,
  onConfirm,
}: Props) {
  const transfer = useTransferStore((state) => state.transfer);

  if (!transfer) return null;

  return (
    <Dialog open={open} onClose={loading ? () => {} : onClose}>
      <DialogBackdrop className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <DialogPanel className="w-full max-w-xl overflow-hidden rounded-md bg-white shadow-xl">
          <div className="border-b border-[#DFE1DF] px-8 py-6">
            <DialogTitle className="text-[22px] font-semibold text-text-primary">
              Confirmar transferencia
            </DialogTitle>

            <p className="mt-2 text-sm text-text-primary">
              Verifique la información antes de continuar.
            </p>
          </div>

          <div className="divide-y divide-[#DFE1DF]">
            <Row label="Tipo de transacción" value="Terceros" />

            <Row label="Cuenta origen" value={transfer.origin} />

            <Row label="Cuenta destino" value={transfer.destination} />

            <Row
              label="Monto"
              value={`${transfer.currency === "USD" ? "$" : "C$"} ${transfer.amount.toLocaleString()}`}
            />
          </div>

          <div className="flex justify-end gap-4 px-8 py-6">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="h-12 rounded border border-[#3B8668] px-8 font-medium text-[#3B8668] transition hover:bg-[#EDF5F2] disabled:opacity-50"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className="flex h-12 min-w-[180px] items-center justify-center rounded bg-[#00593B] px-8 font-medium text-white transition hover:bg-[#00482F] disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Confirmar"
              )}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

interface RowProps {
  label: string;
  value: string;
}

function Row({ label, value }: RowProps) {
  return (
    <div className="flex items-center justify-between px-8 py-5">
      <span className="text-sm text-text-secondary">{label}</span>

      <span className="font-medium text-text-primary">{value}</span>
    </div>
  );
}
