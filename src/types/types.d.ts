export type TColors =
  | "Preta"
  | "Laranja"
  | "Amarela"
  | "Rosa"
  | "Cinza"
  | "Azul"
  | "Bege";

export type TGender = "Masculina" | "Feminina";
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
      filter: [
        {
          color?: TColors;
          gender?: TGender;
        }
      ];
    }
  ];
  filters: [{ gender?: "Gênero"; color?: "Cor" }];
};
