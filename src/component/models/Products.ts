class Products {
  constructor(
    public id: number,
    public title: string,
    public productImg: string,
    public description: string,
    public assessment: number,
    public links: string,
    public tags: string[],
    public items: {
      title: string;
      description: string;
      imageFood: string;
      descriptionModal: string;
      price:number
    }[]
  ) {}
}

export default Products;
