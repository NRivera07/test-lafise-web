"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Controller, Control } from "react-hook-form";

import { TransferFormValues } from "@/types/transfer";
import Image from "next/image";

interface Props {
  control: Control<TransferFormValues>;
}

const options = [
  {
    value: "third-party",
    label: "Terceros",
  },
];

export default function TransactionTypeSelect({ control }: Props) {
  return (
    <Controller
      control={control}
      name="transactionType"
      rules={{
        required: {
          value: true,
          message: "Seleccione un tipo de transacción",
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label className="mb-3 block text-sm font-medium text-text-primary">
            Tipo de transacción
          </label>

          <Listbox value={field.value} onChange={field.onChange}>
            <div className="relative">
              <ListboxButton
                className={`
                  flex
                  h-[60px]
                  w-full
                  items-center
                  justify-between
                  rounded
                  border
                  bg-white
                  px-5
                  ${
                    error
                      ? "border-red-500"
                      : "border-[#DFE1DF] focus:border-[#3B8668]"
                  }
                `}
              >
                <span className="text-[#8D918D]">
                  {options.find((o) => o.value === field.value)?.label ??
                    "Seleccione una opción"}
                </span>

                <Image
                  src="/icons/chevron-down.svg"
                  alt="Chevron down"
                  width={24}
                  height={24}
                />
              </ListboxButton>

              <ListboxOptions
                className="
                  absolute
                  z-50
                  mt-2
                  w-full
                  rounded
                  border
                  border-[#DFE1DF]
                  bg-white
                  shadow-lg
                "
              >
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option.value}
                    className={({ active }) =>
                      `cursor-pointer px-5 py-4 ${active ? "bg-[#EDF5F2]" : ""}`
                    }
                  >
                    {({ selected }) => (
                      <div className="flex justify-between">
                        <span className="text-text-primary">
                          {option.label}
                        </span>
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          {error && (
            <p className="mt-2 text-sm text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
