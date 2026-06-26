import { api } from "./api";
import { User } from "@/types/user";

export async function getUser(userId: number): Promise<User> {
  const { data } = await api.get<User>(`/users/${userId}`);

  return data;
}
