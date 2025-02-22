import { create } from "zustand";
import Products from "../models/Products";
import { getFood } from "../../services/api";

interface ListRestauranteState {
  restaurantes: Products[];
  fetchRestaurantes: () => Promise<void>;
}

export const useListRestaurantes = create<ListRestauranteState>((set) => ({
  restaurantes: [],
  fetchRestaurantes: async () => {
    try {
      const data: Products[] = await getFood();
      set({ restaurantes: data });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  },
}));
