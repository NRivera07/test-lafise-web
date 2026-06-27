"use client";

import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <QueryProvider>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </QueryProvider>
  );
}
