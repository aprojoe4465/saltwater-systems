export type StockPhoto = {
  src: `/photos/${string}`;
  alt: string;
  width: number;
  height: number;
  credit: string;
  creditUrl: string;
};

export const photoHero: StockPhoto = {
  src: "/photos/hero-reef.webp",
  alt: "A shoal of fish swimming among corals in a saltwater aquarium",
  width: 1800,
  height: 1350,
  credit: "Engin Akyurt / Pexels",
  creditUrl: "https://www.pexels.com/photo/vibrant-shoal-of-fish-in-coral-reef-aquarium-39457899/",
};

export const photoServices: StockPhoto = {
  src: "/photos/tropical-aquarium.webp",
  alt: "Tropical fish swimming in a bright aquarium",
  width: 1600,
  height: 1066,
  credit: "NGUYỄN THÀNH NHƠN / Pexels",
  creditUrl: "https://www.pexels.com/photo/underwater-tropical-fish-in-vibrant-aquarium-32803071/",
};

export const photoGallery: StockPhoto[] = [
  {
    src: "/photos/reef-fish.webp",
    alt: "Colorful aquarium fish among coral in a reef tank",
    width: 1600,
    height: 1066,
    credit: "Arlind D / Pexels",
    creditUrl: "https://www.pexels.com/photo/colorful-aquarium-fish-among-coral-reefs-28764426/",
  },
  {
    src: "/photos/freshwater-angelfish.webp",
    alt: "Angelfish in a planted freshwater aquarium",
    width: 1600,
    height: 917,
    credit: "Prateek Sonit / Pexels",
    creditUrl: "https://www.pexels.com/photo/vibrant-freshwater-aquarium-with-angel-fish-38852348/",
  },
  {
    src: "/photos/planted-aquarium.webp",
    alt: "Colorful fish in a lush planted aquarium",
    width: 1600,
    height: 1066,
    credit: "Pham Huynh Tuan Vy / Pexels",
    creditUrl: "https://www.pexels.com/photo/colorful-fish-in-lush-aquarium-with-greenery-33593382/",
  },
  {
    src: "/photos/school-aquarium.webp",
    alt: "A school of fish swimming in an aquarium",
    width: 1600,
    height: 1200,
    credit: "Alexey Demidov / Pexels",
    creditUrl: "https://www.pexels.com/photo/school-of-fish-in-an-aquarium-11185192/",
  },
];
