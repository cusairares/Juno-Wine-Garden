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
      name: "Platou hummus",
      quantity_gr: 380,
      ingredients: "hummus cu ardei capia copt, mix salată, falafel, semințe susan, paprika afumată, lipie, ulei măsline",
      price: 48,
      parent: "Gustări de împărțit"
    }
  ],
  "Pizza" : [
    {
      name: "Pizza margherita",
      quantity_gr: 400,
      ingredients: "sos roșii, mozzarella fior di latte, busuioc",
      price: 38,
      parent: "PIZZA"
    },
    {
      name: "Pizza prosciutto funghi",
      quantity_gr: 460,
      ingredients: "sos roșii, mozzarella fior di latte, prosciutto cotto, ciuperci",
      price: 42,
      parent: "PIZZA"
    },
    {
      name: "Pizza diavola",
      quantity_gr: 450,
      ingredients: "sos roșii, mozzarella fior di latte, salam picant Napoli",
      price: 45,
      parent: "PIZZA"
    },
    {
      name: "Pizza nduja gorgonzola",
      quantity_gr: 410,
      ingredients: "mozzarella fior di latte, nduja Calabra, gorgonzola, roșii cherry",
      price: 52,
      parent: "SPECIAL"
    },
  ],
  "Desert" : [
    {
      name: "Pizza dolce",
      quantity_gr: 420,
      ingredients: "mascarpone, nutella, zahăr pudră",
      price: 54,
      parent: "Desert"
    },
    {
      name: "Papanași Juno",
      quantity_gr: 320,
      ingredients: "papanași, brânză dulce, mascarpone, nutella, zahăr pudră",
      price: 38,
      parent: "Desert"
    },
    {
      name: "Papanași Clasici",
      quantity_gr: 320,
      ingredients: "papanași, brânză dulce, smântână, dulceață",
      price: 38,
      parent: "Desert"
    },
  ]
};
