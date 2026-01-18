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
    },
    {
      name: "Odor Cuvee Rosé Fetească Neagră & Cabernet Sauvignon & Merlot",
      quantity_ml: 750,
      alcohol_percent: 13.5,
      type: "sec",
      price: 108,
      parent: "DeMatei"
    },
    {
      name: "Iordache Fetească Albă",
      quantity_ml: 750,
      alcohol_percent: 12.5,
      type: "sec",
      price: 128,
      parent: "Iooo Chipuri"
    },
    {
      name: "Cupaj Alb F.A., Riesling Italian, F.R., S.B., T. Românească",
      quantity_ml: 750,
      alcohol_percent: 12.5,
      type: "sec",
      price: 118,
      parent: "Iooo Chipuri"
    },
    {
      name: "Tămâioasă Românească",
      quantity_ml: 750,
      alcohol_percent: 12.5,
      type: "sec",
      price: 128,
      parent: "Iooo Chipuri"
    },
    

  ],
  "Moldova" : [
    {
      name: "Fetească Albă",
      quantity_ml: 750,
      alcohol_percent: 12.7,
      type: "sec",
      price: 108,
      parent: "Strunga"
    },
    {
      name: "Velier Sauvignon Blanc",
      quantity_ml: 750,
      alcohol_percent: 12,
      type: "sec",
      price: 128,
      parent: "Strunga"
    },
    {
      name: "Nori de Vară Tamâioasă Românească",
      quantity_ml: 750,
      alcohol_percent: 12.7,
      type: "demidulce",
      price: 138,
      parent: "Strunga"
    },
    {
      name: "Nativus Cuvée de Averești",
      quantity_ml: 750,
      alcohol_percent: 12.5,
      type: "demisec",
      price: 108,
      parent: "Averești"
    },
    {
      name: "Diamond Zghihară",
      quantity_ml: 750,
      alcohol_percent: 12.5,
      type: "demidulce",
      price: 128,
      parent: "Averești"
    },
  ],
  "Dobrogea" : [
    {
      name: "M1 Arezan Chardonnay",
      quantity_ml: 750,
      alcohol_percent: 13.5,
      type: "sec",
      price: 128,
      parent: "M1 Murfatlar"
    },
    {
      name: "Aerosoli Fetească Regală",
      quantity_ml: 750,
      alcohol_percent: 12,
      type: "sec",
      price: 108,
      parent: "M1 Murfatlar"
    },
    {
      name: "Aerosoli Rosé",
      quantity_ml: 750,
      alcohol_percent: 12,
      type: "sec",
      price: 108,
      parent: "M1 Murfatlar"
    },
    {
      name: "Clasic Sauvignon Blanc Demisec",
      quantity_ml: 750,
      alcohol_percent: 12,
      type: "demisec",
      price: 108,
      parent: "Domeniul Bogdan"
    },
    {
      name: "Organic Chardonnay",
      quantity_ml: 750,
      alcohol_percent: 13,
      type: "sec",
      price: 108,
      parent: "Domeniul Bogdan"
    },
    {
      name: "Princeps Aligote",
      quantity_ml: 750,
      alcohol_percent: 13,
      type: "sec",
      price: 128,
      parent: "Caii de la Letea"
    },
    {
      name: "Princeps Chardonnay",
      quantity_ml: 750,
      alcohol_percent: 13.5,
      type: "sec",
      price: 128,
      parent: "Caii de la Letea"
    },
    {
      name: "Fetească Albă",
      quantity_ml: 750,
      alcohol_percent: 12.4,
      type: "sec",
      price: 128,
      parent: "Crama Gabai"
    },
    {
      name: "Chardonnay",
      quantity_ml: 750,
      alcohol_percent: 13,
      type: "sec",
      price: 128,
      parent: "Crama Gabai"
    },
  ]
};