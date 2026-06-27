"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const tabs = [
  {
    id: "movements",
    label: "Movimientos",
  },
  {
    id: "status",
    label: "Estado",
  },
  {
    id: "detail",
    label: "Detalle",
  },
  {
    id: "funds",
    label: "Fondo no Disponible",
  },
];

export default function TransactionsTabs({ value, onChange }: Props) {
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => {
        const active = value === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center rounded-[4px] justify-center py-3 px-6 text-[16px] transition

              ${
                active
                  ? "bg-[#EDF5F2] font-semibold text-text-secondary"
                  : "text-text-primary"
              }
            `}
          >
            <span> {tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
