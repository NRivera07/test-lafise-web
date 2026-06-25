"use client";

import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return <QueryProvider>{children}</QueryProvider>;
}
