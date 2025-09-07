import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  calories: number;
  type: string;
  bestSale: boolean;
  price: number;
}

const API_URL = import.meta.env.VITE_API_URL;

export function useMenuItems() {
  return useQuery<MenuItem[]>({
    queryKey: ["menu-items"],
    queryFn: async () => {
      const { data } = await axios.get<MenuItem[]>(`${API_URL}/menu-items`);
      return data;
    },
  });
}
