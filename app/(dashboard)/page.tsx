import AccountsSection from "@/components/sections/AccountsSection";
import CardsSection from "@/components/sections/CardsSection";
import TransactionsSection from "@/components/sections/TransactionsSection";

export default function Home() {
  return (
    <main>
      <CardsSection />
      <AccountsSection />
      <TransactionsSection />
    </main>
  );
}
