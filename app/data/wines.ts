export interface Wine {
  name: string;
  quantity_ml: number;
  alcohol_percent: number;
  type: string;
  price: number;
  parent?: string;
}

export const wineData: Record<string, Wine[]> = {
  "Pahar": [
    {
      name: "Vin Alb",
      quantity_ml: 150,
      alcohol_percent: 15.5,
      type: "sec",
      price: 28
    },
    {
      name: "Vin Rose",
      quantity_ml: 150,
      alcohol_percent: 13.0,
      type: "sec",
      price: 28
    },
    {
      name: "Vin Rosu",
      quantity_ml: 150,
      alcohol_percent: 13.5,
      type: "sec",
      price: 28
    }
  ],
  "Dealu Mare": [ 
    {
      name: "Arrogance Fetească Albă & Tămâioasă Românească Demisec",
      quantity_ml: 750,
      alcohol_percent: 13.5,
      type: "demisec",
      price: 128,
      parent: "Domeniile Franco Romane"
    },
    {
      name: "Heritage Chardonnay",
      quantity_ml: 750,
      alcohol_percent: 12.9,
      type: "sec",
      price: 118,
      parent: "Domeniile Franco Romane"
    },
    {
      name: "Vox Dei Tămâioasă Românească Demisec",
      quantity_ml: 750,
      alcohol_percent: 13,
      type: "demisec",
      price: 108,
      parent: "Domeniile Franco Romane"
    },
    {
      name: "Odor Cuvee Alb Fetească Regală & Fetească Albă",
      quantity_ml: 750,
      alcohol_percent: 13.5,
      type: "sec",
      price: 108,
      parent: "DeMatei"
    }
  ]
};