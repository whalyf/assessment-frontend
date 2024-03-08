export type TProduct = {
  filters: [{ gender: "Gênero" }];
  items: [
    {
      filter: [{ gender: "Masculina" | "Feminina" }];
      id: number;
      image: string;
      name: string;
      path: string;
      price: number;
      sku: `sku-${number}`;
      specialPrice: number;
    }
  ];
};
