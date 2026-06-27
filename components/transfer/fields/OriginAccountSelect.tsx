"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Controller, Control } from "react-hook-form";

import { Account } from "@/types/account";
import { TransferFormValues } from "@/types/transfer";
import Image from "next/image";

interface Props {
  control: Control<TransferFormValues>;
  accounts: Account[];
}

export default function OriginAccountSelect({ control, accounts }: Props) {
  return (
    <Controller
      control={control}
      name="origin"
      rules={{
        required: {
          value: true,
          message: "Seleccione una cuenta",
        },
      }}
      render={({ field, fieldState: { error } }) => {
        const selected = accounts.find(
          (account) => account.account_number === field.value,
        );

        return (
          <div>
            <label className="mb-3 block text-sm font-medium text-text-primary">
              Cuenta
            </label>

            <Listbox value={field.value} onChange={field.onChange}>
              <div className="relative">
                <ListboxButton
                  className={`
                flex
                h-[60px]
                w-full
                items-center
                rounded
                border
                bg-white
                px-5
                ${error ? "border-red-500" : "border-[#DFE1DF]"}
              `}
                >
                  {selected ? (
                    <>
                      <span className="font-medium text-[#3B8668]">
                        {selected.currency} Cuenta
                      </span>

                      <span className="ml-6 text-[#8D918D]">
                        {selected.account_number}
                      </span>

                      <span className="ml-auto mr-8 font-semibold text-text-primary">
                        {selected.currency === "USD" ? "$" : "C$"}{" "}
                        {Number(selected.balance).toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-[#8D918D]">
                      Seleccione una cuenta
                    </span>
                  )}
                  <Image
                    src="/icons/chevron-down.svg"
                    alt="Chevron down"
                    width={24}
                    height={24}
                  />
                </ListboxButton>

                <ListboxOptions className="absolute z-50 mt-2 w-full rounded border border-[#DFE1DF] bg-white shadow-lg">
                  {accounts.map((account) => (
                    <ListboxOption
                      key={account.account_number}
                      value={account.account_number}
                      className={({ active }) =>
                        `cursor-pointer px-5 py-4 ${
                          active ? "bg-[#EDF5F2]" : ""
                        }`
                      }
                    >
                      {({ selected }) => (
                        <div className="flex items-center">
                          <span className="font-medium text-[#3B8668]">
                            {account.currency} Cuenta
                          </span>

                          <span className="ml-5 text-[#8D918D]">
                            {account.account_number}
                          </span>

                          <span className="ml-auto font-semibold text-text-primary">
                            {account.currency === "USD" ? "$" : "C$"}{" "}
                            {Number(account.balance).toLocaleString()}
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
        );
      }}
    />
  );
}
