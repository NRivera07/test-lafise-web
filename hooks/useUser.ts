"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { useUserStore } from "@/store/user.store";
import { getUser } from "@/services/user.services";

export function useUser(userId: number) {
  const setUser = useUserStore((state) => state.setUser);

  const query = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });

  useEffect(() => {
    if (query.data) {
      setUser(query.data);
    }
  }, [query.data, setUser]);

  return query;
}
