export interface Wine {
  name: string;
  quantity_ml: number;
  alcohol_percent: number;
  type: string;
  price:number;
}

export const wineData: Wine[] =[
  {
    "name": "Sauvignon Blanc",
    "quantity_ml": 150,
    "alcohol_percent": 12.5,
    "type": "White",
    "price":128
  },
  {
    "name": "Pinot Noir",
    "quantity_ml": 150,
    "alcohol_percent": 13.0,
    "type": "Red",
    "price":118
  },
  {
    "name": "Chardonnay",
    "quantity_ml": 750,
    "alcohol_percent": 13.5,
    "type": "White",
    "price":108
  },
  {
    "name": "Rosé Cuvee",
    "quantity_ml": 150,
    "alcohol_percent": 12.0,
    "type": "Rosé",
    "price":128
  },
  {
    "name": "Prosecco DOC",
    "quantity_ml": 750,
    "alcohol_percent": 11.0,
    "type": "Sparkling",
    "price":128
  }
]