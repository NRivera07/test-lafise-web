"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "Tablero",
    href: "/",
    icon: "/icons/dashboard.svg",
    activeIcon: "/icons/dashboard-active.svg",
  },
  {
    label: "Transferir",
    href: "/transfer",
    icon: "/icons/transfer.svg",
    activeIcon: "/icons/transfer-active.svg",
  },
  {
    label: "Pagar",
    href: "/pay",
    icon: "/icons/pay.svg",
    activeIcon: "/icons/pay-active.svg",
  },
  {
    label: "Mis transacciones",
    href: "/my-transactions",
    icon: "/icons/my-transactions.svg",
    activeIcon: "/icons/my-transactions-active.svg",
  },
  {
    label: "Gestionar",
    href: "/management",
    icon: "/icons/demarche.svg",
    activeIcon: "/icons/demarche-active.svg",
  },
  {
    label: "Cheques",
    href: "/checks",
    icon: "/icons/check.svg",
    activeIcon: "/icons/check-active.svg",
  },
  {
    label: "Paganet",
    href: "/paganet",
    icon: "/icons/paganet.svg",
    activeIcon: "/icons/paganet-active.svg",
  },
  {
    label: "Administrar",
    href: "/admin",
    icon: "/icons/demarche.svg",
    activeIcon: "/icons/demarche-active.svg",
  },
  {
    label: "Ahorro automático",
    href: "/saving",
    icon: "/icons/saving.svg",
    activeIcon: "/icons/saving-active.svg",
  },
  {
    label: "Configuración",
    href: "/settings",
    icon: "/icons/settings.svg",
    activeIcon: "/icons/settings-active.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] h-screen border-r bg-[#F9FAF9] flex flex-col">
      <div className="w-[280px] h-[95px] px-[38px] pt-[24px] pb-[8px] shrink-0">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={192}
          height={63}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="flex-1 overflow-y-auto px-[38px] pb-[8px]">
        <nav className="mt-6">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-[#EAF6F0]" : "hover:bg-[#F2F7F5]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={isActive ? item.activeIcon : item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />

                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-text-secondary" : "text-text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <Image
                  src={
                    isActive
                      ? "/icons/chevron-right-active.svg"
                      : "/icons/chevron-right.svg"
                  }
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="shrink-0 px-[38px] pt-[24px] pb-[8px]">
        <div className="w-full h-px bg-[#E8E8E8] mb-6" />{" "}
        <h3 className="text-[16px] font-semibold text-text-primary mb-3">
          Tasa de cambio
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <select className="flex-1 h-8 rounded border text-[#6B6B6B] border-[#D9D9D9] bg-white px-2 text-xs outline-none">
            <option>Córdoba</option>
            <option>USD</option>
          </select>

          <select className="flex-1 h-8 rounded border text-[#6B6B6B] border-[#D9D9D9] bg-white px-2 text-xs outline-none">
            <option>USD</option>
            <option>Córdoba</option>
          </select>
        </div>
        <div className="flex items-center justify-between text-text-primary py-2">
          <span className="text-md text-text-gray">NIO: 35.1</span>

          <Image src="/icons/change.svg" alt="Cambio" width={24} height={24} />

          <span className="text-md text-text-gray">USD: 35.95</span>
        </div>
        <p className="mt-4 text-[10px] leading-4 text-text-primary">
          IP del Servidor: 190.432.574.23
          <br />
          Último acceso: 2021/11/21 13:32:11
        </p>
      </div>
    </aside>
  );
}
