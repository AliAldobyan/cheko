import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Restaurant {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

const API_URL = import.meta.env.VITE_API_URL;

export function useRestaurants() {
  return useQuery<Restaurant[]>({
    queryKey: ["restaurants"],
    queryFn: async () => {
      const { data } = await axios.get<Restaurant[]>(`${API_URL}/restaurants`);
      return data;
    },
  });
}
