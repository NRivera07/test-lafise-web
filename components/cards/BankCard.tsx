import Image from "next/image";

interface BankCardProps {
  lastDigits: string;
  expireDate: string;
  holder: string;
  background?: string;
}

export default function BankCard({
  background,
  lastDigits,
  expireDate,
  holder,
}: BankCardProps) {
  return (
    <div
      style={{ background }}
      className="relative w-full max-w-[400px] aspect-[400/236] rounded-2xl overflow-hidden"
    >
      <Image
        src="/images/card-pattern.png"
        alt=""
        fill
        className="object-cover opacity-10"
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-7">
        <Image
          src="/images/logo-white.svg"
          alt="Banco Lafise"
          width={110}
          height={40}
        />
        <div className="flex items-center justify-between text-white text-[21.49px] tracking-[4px] font-medium">
          <span>5325</span>
          <span>****</span>
          <span>****</span>
          <span>{lastDigits}</span>
        </div>
        <div className="flex justify-between items-end text-white">
          <div>
            <p className="text-[11px] opacity-80 mb-1"></p>
            <p className="text-[12.62px]">{holder}</p>
          </div>

          <div className="text-right">
            <p className="text-[7.18px] opacity-80">Expire date</p>

            <p className="text-[12.62px]">{expireDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
