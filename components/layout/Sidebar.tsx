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
    <aside className="w-[280px] min-h-screen border-r bg-[#F9FAF9]">
      <div>
        <div className="w-[280px] h-[95px] px-[38px] pt-[24px] pb-[8px]">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={192}
            height={63}
            className="w-full h-auto"
            priority
          />
        </div>

        <nav className="mt-6">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            console.log("isActive", isActive, pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#EAF6F0] text-text-secondary"
                    : "hover:bg-[#F2F7F5] text-text-primary"
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
      {/* <div className="border-t p-6">
        <div className="flex items-center gap-2">
          <Wallet size={18} />

          <div>
            <p className="text-xs text-gray-500">Tipo de cambio</p>

            <p className="font-semibold">USD 35.95</p>
          </div>
        </div>
      </div> */}
    </aside>
  );
}
