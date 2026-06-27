import Image from "next/image";

interface Props {
  currentStep: number;
}

const steps = [
  {
    step: "Paso 1",
    title: "Cuenta origen",
  },
  {
    step: "Paso 2",
    title: "Cuenta destino",
  },
  {
    step: "Paso 3",
    title: "Monto a transferir",
  },
  {
    step: "Paso 4",
    title: "Datos adicionales ",
  },
];

export default function TransferStepper({ currentStep }: Props) {
  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-4">
        {steps.map((step, index) => {
          const completed = currentStep > index + 1;
          const active = currentStep === index + 1;

          return (
            <div
              key={step.title}
              className="relative flex flex-col items-center"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-[18px] left-1/2 w-full h-[2px] bg-text-secondary" />
              )}
              <div
                className={`relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold
                ${
                  completed
                    ? "bg-[#3B8668] text-white"
                    : "border bg-white"
                }`}
              >
                {completed ? (
                  <Image
                    src="/icons/check-list.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                ) : (
                  <div className="bg-text-secondary w-[8px] h-[8px] rounded-2xl"></div>
                )}
              </div>
              <span className="mt-4 text-sm text-[#8D918D]">{step.step}</span>

              <span className="mt-1 text-center text-[14px] font-medium text-[#272727]">
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
