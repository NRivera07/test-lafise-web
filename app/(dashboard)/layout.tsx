"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useUser } from "@/hooks/useUser";

export default function Layout({ children }: { children: React.ReactNode }) {
  useUser(1);

  return <DashboardLayout>{children}</DashboardLayout>;
}
