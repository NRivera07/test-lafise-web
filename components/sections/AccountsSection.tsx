"use client";

import { useMemo } from "react";

import AccountCard from "@/components/accounts/AccountCard";
import AccountSkeleton from "@/components/accounts/AccountSkeleton";
import AccountEmpty from "@/components/accounts/AccountEmpty";

import { useAccounts } from "@/hooks/useAccounts";
import { useUserStore } from "@/store/user.store";

export default function AccountsSection() {
  const user = useUserStore((state) => state.user);

  const accountQueries = useAccounts(
    user?.products?.map((product) => product.id) ?? [],
  );

  const isPending = accountQueries.some((query) => query.isPending);

  const accounts = useMemo(
    () => accountQueries.flatMap((query) => query.data ?? []),
    [accountQueries],
  );

  return (
    <section className="mt-8">
      <h2 className="mb-6 text-[20px] font-semibold text-text-primary">
        Cuentas
      </h2>

      {isPending ? (
        <AccountSkeleton />
      ) : accounts.length === 0 ? (
        <AccountEmpty />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {accounts.map((account) => (
            <AccountCard
              key={account.account_number}
              title={`${account.currency} Cuenta`}
              accountNumber={account.account_number}
              balance={`${
                account.currency === "NIO" ? "C$" : "$"
              } ${Number(account.balance).toLocaleString()}`}
              flag={
                account.currency === "NIO"
                  ? "/images/nicaragua.svg"
                  : "/images/usa.svg"
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
