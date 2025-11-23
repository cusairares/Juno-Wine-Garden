export interface Food {
  name: string;
  quantity_gr: number;
  ingredients: string;
  price: number;
  parent?: string;
}

export const foodData: Record<string, Food[]> = {
  "Aperitive": [
    {
      name: "Platou Bella Italia (2 pers.)",
      quantity_gr: 780,
      ingredients: "parmezan / grana padano, mozzarela bocconcini, pecorino romano, bufalla, ementaller / gouda, nuci, măsline, focaccia",
      price: 120,
      parent: "Platouri"
    },
    {
      name: "Platou Bella Italia con carne",
      quantity_gr: 780,
      ingredients: "parmezan / grana padano, mozzarela bocconcini, pecorino romano, ementaller / gouda, prosciutto crudo, salami, nduja Calabra, nuci, măsline, focaccia",
      price: 140,
      parent: "Platouri"
    }
  ],
  "Salate": [
    {
      name: "Inele de ceapă",
      quantity_gr: 30,
      ingredients: "nele de ceapă, sos sweet chili",
      price: 128,
      parent: "Gustări de împărțit"
    },
    {
      name: "Platou hummus",
      quantity_gr: 380,
      ingredients: "hummus cu ardei capia copt, mix salată, falafel, semințe susan, paprika afumată, lipie, ulei măsline",
      price: 48,
      parent: "Gustări de împărțit"
    }
  ],
};
