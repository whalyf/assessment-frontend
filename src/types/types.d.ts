export type TProduct = {
  items: [
    {
      id: number;
      image: string;
      name: string;
      path: string;
      price: number;
      sku: `sku-${number}`;
      specialPrice: number;
    }
  ];
} & (
  | {
      filters: [{ gender: "Gênero" }];
      items: [
        {
          filter: [{ gender: "Masculina" | "Feminina" }];
        }
      ];
    }
  | {
      filters: [{ color: "Cor" }];
      items: [
        {
          filter: [
            {
              color:
                | "Preta"
                | "Laranja"
                | "Amarela"
                | "Rosa"
                | "Cinza"
                | "Azul"
                | "Bege";
            }
          ];
        }
      ];
    }
);
