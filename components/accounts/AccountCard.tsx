import Image from "next/image";

interface AccountCardProps {
  title: string;
  accountNumber: string;
  balance: string;
  flag: string;
}

export default function AccountCard({
  title,
  accountNumber,
  balance,
  flag,
}: AccountCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[20px] font-semibold text-text-primary">
            {title}
          </h3>

          <div className="mt-3 flex items-center gap-3">
            <span className="rounded bg-[#EDF5F2] px-2 py-1 text-text-secondary text-[14px] font-medium">
              {accountNumber}
            </span>

            <Image src="/icons/copy.svg" alt="Copiar" width={22} height={22} />
          </div>
        </div>

        <Image src={flag} alt="" width={44} height={44} />
      </div>

      <p className="mt-8 text-[22px] font-semibold text-text-primary">
        {balance}
      </p>
    </div>
  );
}
