"use client";

import AccountCard from "@/components/accounts/AccountCard";
import { useAccounts } from "@/hooks/useAccounts";
import { useUserStore } from "@/store/user.store";

export default function AccountsSection() {
  const user = useUserStore((state) => state.user);

  const accountQueries = useAccounts(
    user?.products?.map((product) => product.id) ?? [],
  );
  const accounts = accountQueries.flatMap((query) => query.data ?? []);

  return (
    <section className="mt-8">
      <h2 className="text-[20px] font-semibold text-text-primary mb-6">
        Cuentas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {accounts?.map((account) => (
          <AccountCard
            key={account.alias}
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
    </section>
  );
}
