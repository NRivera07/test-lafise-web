"use client";

import { useMemo } from "react";

import { useUserStore } from "@/store/user.store";
import { useTransferStore } from "@/store/transfer.store";
import { useTransactions } from "@/hooks/useTransactions";

import TransactionsTable from "../transactions/TransactionTable";
import TransactionSkeleton from "../transactions/TransactionSkeleton";
import TransactionEmpty from "../transactions/TransactionEmpty";

export default function TransactionsSection() {
  const user = useUserStore((state) => state.user);

  const localTransactions = useTransferStore((state) => state.transactions);

  const queries = useTransactions(
    user?.products?.map((product) => product.id) ?? [],
  );

  const hasQueries = queries.length > 0;

  const isPending = !hasQueries || queries.some((query) => query.isPending);

  const apiTransactions = useMemo(
    () => queries.flatMap((query) => query.data?.items ?? []),
    [queries],
  );

  const transactions = useMemo(() => {
    const merged = [...localTransactions, ...apiTransactions];

    return merged.filter(
      (transaction, index, array) =>
        array.findIndex(
          (item) => item.transaction_number === transaction.transaction_number,
        ) === index,
    );
  }, [localTransactions, apiTransactions]);

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-semibold text-text-primary">
          Transacciones recientes
        </h2>

        <button className="text-[14px] font-medium text-text-primary transition-colors hover:text-text-secondary">
          Ver todas
        </button>
      </div>

      {isPending ? (
        <TransactionSkeleton />
      ) : transactions.length === 0 ? (
        <TransactionEmpty />
      ) : (
        <TransactionsTable transactions={transactions} />
      )}
    </section>
  );
}
