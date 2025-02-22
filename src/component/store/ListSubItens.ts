import { create } from "zustand";

export type ProductFood = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

interface ListRestarutantesFood {
  carrinho: ProductFood[];
  addCarrinho: (item: ProductFood) => void;
  removerCarrinho: (id: number) => void;
  limparCarrinho: () => void;
}

export const useListSubItens = create<ListRestarutantesFood>((set) => ({
  carrinho: [],
  addCarrinho: (item) =>
    set((state) => ({
      carrinho: [...state.carrinho, item],
    })),
  removerCarrinho: (id) =>
    set((state) => ({
      carrinho: state.carrinho.filter((item) => item.id !== id),
    })),
  limparCarrinho: () =>
    set(() => ({
      carrinho: [],
    })),
}));
