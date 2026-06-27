"use client";

import { useUserStore } from "@/store/user.store";
import Image from "next/image";

export default function Header() {
  const user = useUserStore((state) => state.user);

  return (
    <header className="h-16 bg-white px-6 py-[12px] flex items-center justify-between shadow-[0px_2px_15px_0px_rgba(104,104,104,0.07)]">
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Image src="/icons/menu.svg" alt="Menú" width={24} height={24} />
      </button>
      <div className="h-10 flex items-center gap-4">
        <Image
          src="/icons/bell.svg"
          alt="Notificaciones"
          width={24}
          height={24}
        />

        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <Image src="/icons/search.svg" alt="Buscar" width={24} height={24} />

          <input
            placeholder="Buscar"
            className="outline-none text-text-primary placeholder:text-text-gray"
          />
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden">
          {user?.profile_photo ? (
            <Image
              src={user.profile_photo}
              alt={user.full_name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-300" />
          )}
        </div>
      </div>
    </header>
  );
}
