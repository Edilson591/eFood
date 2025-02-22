class Products {
  constructor(
    public id: number,
    public titulo: string,
    public capa: string,
    public descricao: string,
    public destacado: boolean,
    public avaliacao: number,
    public tipo: string,
    public cardapio: {
      id: number;
      nome: string;
      foto: string;
      descricao: string;
      porcao: string;
      preco:number;
    }[]
  ) {}
}

export default Products;



