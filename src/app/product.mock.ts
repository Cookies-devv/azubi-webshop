import { Produkt } from "./product-card/product_interface";


export const productMock: Produkt[] = [
  {
    bildUrl:
      'Bilder/Parfuem2.png',
    beschreibung: 'Parfüm',
    preis: 400,
    id: crypto.randomUUID(),
    anzahl: 0,

  },
  {
    bildUrl:
      'https://www.princely-london.com/thumbnail/9d/7d/1a/1646069700/p1029hb-3_600x600.jpg?ts=1646069921',
    beschreibung: 'Handtasche',
    preis: 4000,
    id: crypto.randomUUID(),
    anzahl: 0,
  },
  {
    bildUrl:
    'https://images.laced.com/products/d098e3c7-9052-4add-b963-7ff3b833a8ff.jpg?auto=format&fit=max&w=640&q=75',
    beschreibung: 'Air Jordan 1 Retro High OG Hyper Royal',
    preis: 400,
    id: crypto.randomUUID(),
    anzahl: 0,
  },
  {
    bildUrl:
    'https://images.footlocker.com/is/image/FLEU/314106146104_01?wid=581&hei=581&fmt=png-alpha',
    beschreibung: 'Jordan 1 Retro Low 85',
    preis: 170,
    id: crypto.randomUUID(),
    anzahl: 0,
  },
  {
    bildUrl:
    'Bilder/HoodieModeZauber.png',
    beschreibung: 'Hoodie grau',
    preis: 80,
    id: crypto.randomUUID(),
    anzahl: 0,
  },
  {
    bildUrl:
    'Bilder/ZipHoodie2.png',
    beschreibung: 'Zip Hoodie weiß',
    preis: 90,
    id: crypto.randomUUID(),
    anzahl: 0,
  },
  {
    bildUrl:
    'Bilder/T-shirt.png',
    beschreibung: 'T-Shirt Babyblau',
    preis: 60,
    id: crypto.randomUUID(),
    anzahl: 0,
  },
];
