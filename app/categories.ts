export interface Subcategory {
  name: string;
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}

export const categoriesData: Category[] = [
  {
    name: "Wines",
    subcategories: [
      { name: "Pahar" },
      { name: "Dealu Mare" },
      { name: "Moldova" },
      { name: "Dobrogea" },
    ],
  },
  { name: "Bar", 
    subcategories: [
      { name: "Coffe" }, 
      { name: "Lemonades" }, 
      { name: "Soft Drinks" }, 
      { name: "Beers" },
    ],
},
  { name: "Food", 
    subcategories: [
      { name: "Aperitive" }, 
      { name: "Salate" }, 
      { name: "Pizza" }, 
      { name: "Desert" }, 
    ],
},
];