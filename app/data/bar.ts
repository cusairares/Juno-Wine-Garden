export interface Bar {
  name: string;
  quantity_ml: number;
  price: number;
  parent?: string;
}

export const barData: Record<string, Bar[]> = {
  "Coffe": [
    {
      name: "Mulled Wine",
      quantity_ml: 250,
      price: 20,
      parent: "Coffe"
    },
    {
      name: "Espresso",
      quantity_ml: 30,
      price: 17,
      parent: "Coffe"
    },
  ],
  "Lemonades": [
    {
      name: "Hot Lemonade",
      quantity_ml: 300,
      price: 25,
      parent: "Lemonades"
    },
    {
      name: "Limonadă cu ghimbir",
      quantity_ml: 300,
      price: 21,
      parent: "Lemonades"
    },
  ],
};
