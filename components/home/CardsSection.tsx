import BankCard from "@/components/cards/BankCard";
import { cards } from "@/data/cards";

export default function CardsSection() {
  return (
    <section>
      <h1 className="text-[24px] font-semibold text-text-primary mb-6">
        Mis tarjetas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.lastDigits} className="flex justify-center">
            <BankCard
              background={card.background}
              lastDigits={card.lastDigits}
              expireDate={card.expireDate}
              holder={card.holder}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
