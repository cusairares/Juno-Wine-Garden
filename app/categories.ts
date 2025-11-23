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
      { name: "Oltenia" },
      { name: "Republica Moldova" },
      { name: "Transilvania" },
      { name: "Banat & Crișana" },
      { name: "Spumate" },
      { name: "Premium Wines" },
      { name: "Magnum" },
      { name: "Importuri" },
    ],
  },
  { name: "Bar", 
    subcategories: [
      { name: "Coffe" }, 
      { name: "Lemonades" }, 
      { name: "Soft Drinks" }, 
      { name: "Beers" },
      { name: "Long Drinks" }, 
      { name: "Spirits" },
      { name: "Tigari" }, 
    ],
},
  { name: "Food", 
    subcategories: [
        { name: "Aperitive" }, 
      { name: "Salate" }, 
      { name: "Pizza" }, 
      { name: "Pasta" },
      { name: "Facaccia" }, 
      { name: "Fructe de Mare" },
      { name: "Desert" }, 
    ],
},
];