import { create } from "zustand";


export type ProductFood = {id: number, title: string; description: string; imageFood: string, descriptionModal: string, price: number }
export type Product = Omit<ProductFood, "id">

interface ListSubItensState {
  carrinho: ProductFood[];
  addCarrinho: (item: Product) => void;
  removerCarrinho: (id: number) => void;
  limparCarrinho: () => void;
}

export const useListSubItens = create<ListSubItensState>((set) => ({
  carrinho: [],
  addCarrinho: (item) => set((state) => {
    const newItem:ProductFood = {
      ...item,
      id: state.carrinho.length + 1
    }
    return {
      carrinho: [...state.carrinho,newItem]
    }
  }),
  removerCarrinho: (id) => set((state) => ({
    carrinho: state.carrinho.filter((item) => item.id !== id)
  })),
  limparCarrinho: () => set(() => ({
    carrinho:[]
  }))
}));
