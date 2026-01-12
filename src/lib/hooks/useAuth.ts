import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useAuthStore } from "../stores/authStore";

export type User = {
  id: string;
  name: string;
  email: string;
};

type AuthResponse = {
  user: User | null;
};

export function useAuth() {
  const setUser = useAuthStore((state) => state.setUser);
  const { data, error, isLoading } = useSWR<AuthResponse>("/api/auth", fetcher);

  useEffect(() => {
    setUser(data?.user ?? null);
  }, [data?.user, setUser]);

  return {
    user: data?.user ?? null,
    isLoading,
    error,
  };
}
