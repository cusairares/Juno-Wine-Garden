export interface Bar {
  name: string;
  quantity_ml: number;
  price: number;
  parent?: string;
  alcohol_percent?: number;
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
  "Soft Drinks" : [
    {
      name: "Acqua Panna",
      quantity_ml: 500,
      price: 13,
      parent: "Soft Drinks"
    },
    {
      name: "San Pellegrino Sparkling",
      quantity_ml: 500,
      price: 13,
      parent: "Soft Drinks"
    },
    {
      name: "Apă Minerală Dorna 750 ml",
      quantity_ml: 750,
      price: 18,
      parent: "Soft Drinks"
    },
    {
      name: "Coca Cola",
      quantity_ml: 330,
      price: 13,
      parent: "Soft Drinks"
    },
    {
      name: "Coca Cola Zero",
      quantity_ml: 330,
      price: 13,
      parent: "Soft Drinks"
    },

  ],
  "Beers" : [
    {
      name: "Czell Clară 1893 - Brașov",
      quantity_ml: 500,
      price: 19,
      parent: "Local Craft Beers",
      alcohol_percent: 4.5,
    },
    {
      name: "Czell Unfiltred 1893 - Brașov",
      quantity_ml: 500,
      price: 19,
      parent: "Local Craft Beers",
      alcohol_percent: 4.5,
    },
    {
      name: "Peroni fara alcool",
      quantity_ml: 500,
      price: 19,
      parent: "Peroni",
      alcohol_percent: 0.0,
    },
    
  ]
};
