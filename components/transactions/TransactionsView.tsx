"use client";

import { useState } from "react";

import { useTransactions } from "@/hooks/useTransactions";
import TransactionsTabs from "./TransactionTabs";
import TransactionsTable from "./TransactionTable";
import TransactionSkeleton from "./TransactionSkeleton";
import TransactionEmpty from "./TransactionEmpty";
import { useUserStore } from "@/store/user.store";

export default function TransactionsView() {
  const [tab, setTab] = useState("movements");
  const user = useUserStore((state) => state.user);

  const transactionQueries = useTransactions(
    user?.products.map((product) => product.id) ?? [],
  );

  const hasQueries = transactionQueries.length > 0;

  const isPending =
    !hasQueries || transactionQueries.some((query) => query.isPending);

  const transactions = transactionQueries.flatMap(
    (query) => query.data?.items ?? [],
  );

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-[20px] font-semibold text-text-primary">
          Mis Transacciones
        </h1>
      </header>

      <TransactionsTabs value={tab} onChange={setTab} />

      {isPending ? (
        <TransactionSkeleton />
      ) : transactions.length === 0 ? (
        <TransactionEmpty />
      ) : (
        <TransactionsTable transactions={transactions} tab={tab} />
      )}
    </section>
  );
}
