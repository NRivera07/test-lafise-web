"use client";

import { useUserStore } from "@/store/user.store";
import { useTransactions } from "@/hooks/useTransactions";
import TransactionsTable from "../transactions/TransactionTable";

export default function TransactionsSection() {
  const user = useUserStore((state) => state.user);

  const queries = useTransactions(user?.products?.map((p) => p.id) ?? []);

  const loading = queries.some((q) => q.isLoading);

  if (loading) return null;

  const transactions = queries.flatMap((query) => query.data?.items ?? []);

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-text-primary">
          Transacciones recientes
        </h2>

        <button className="text-[14px] font-medium text-text-primary hover:text-text-secondary transition-colors">
          Ver todas
        </button>
      </div>

      <TransactionsTable transactions={transactions} />
    </section>
  );
}
