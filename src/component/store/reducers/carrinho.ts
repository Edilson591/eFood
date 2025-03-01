import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type carrinhoFood = {
  id: number;
  nome: string;
  idItem?: number;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};
interface carrinhoState {
  carrinho: carrinhoFood[];
}

const initialState: carrinhoState = {
  carrinho: [],
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: initialState,
  reducers: {
    addCarrinho: (state, action: PayloadAction<carrinhoFood>) => {
      const novoItem = {
        ...action.payload,
        idItem: state.carrinho.length + 1,
      };
      state.carrinho = [...state.carrinho, novoItem];
    },
    removerCarrinho: (state, action: PayloadAction<number>) => {
      state.carrinho = [
        ...state.carrinho.filter((cart) => cart.idItem !== action.payload),
      ];
    },
    limparCarrinho: (state) => {
      state.carrinho = [];
    },
  },
});

export const { addCarrinho, removerCarrinho, limparCarrinho } =
  carrinhoSlice.actions;

export default carrinhoSlice.reducer;
