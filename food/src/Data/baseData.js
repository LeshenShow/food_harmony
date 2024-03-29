const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const data = [
  {
    id: 0,
    category: "Fruits",
    subcategory: "Apples",
    price: {
      currentPrice: 100,
      initialPrice: 100,
    },
    stocked: true,
    name: "Apple Red",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/454328/apple-food-fruit.svg",
      },
      {
        id: 1,
        url: "https://www.svgrepo.com/show/429782/apple-apples-fruit.svg",
      },
      { id: 2, url: "https://www.svgrepo.com/show/475233/apple.svg" },
    ],
  },
  {
    id: 1,
    category: "Fruits",
    subcategory: "Dragonfruites",
    price: {
      currentPrice: 105,
      initialPrice: 666,
    },
    stocked: true,
    name: "Dragonfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/454331/dragon-fruit-food-fruit.svg",
      },
      {
        id: 1,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
      {
        id: 2,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 2,
    category: "Fruits",
    subcategory: "Passionfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Passionfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 3,
    category: "Vegetables",
    subcategory: "Spinaches",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Spinach",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 4,
    category: "Vegetables",
    subcategory: "Pumpkins",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Pumpkin",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 5,
    category: "Vegetables",
    subcategory: "Peas",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Peas",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 6,
    category: "Fruits",
    subcategory: "Dragonfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Dragonfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 7,
    category: "Fruits",
    subcategory: "Passionfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Passionfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 8,
    category: "Vegetables",
    subcategory: "Spinaches",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Spinach",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 9,
    category: "Vegetables",
    subcategory: "Pumpkins",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Pumpkin",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 10,
    category: "Vegetables",
    subcategory: "Peas",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Peas",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 11,
    category: "Fruits",
    subcategory: "Dragonfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Dragonfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 12,
    category: "Fruits",
    subcategory: "Passionfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Passionfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 13,
    category: "Vegetables",
    subcategory: "Spinaches",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Spinach",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 14,
    category: "Vegetables",
    subcategory: "Pumpkins",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Pumpkin",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 15,
    category: "Vegetables",
    subcategory: "Peas",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Peas",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 16,
    category: "Fruits",
    subcategory: "Dragonfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Dragonfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 17,
    category: "Fruits",
    subcategory: "Passionfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Passionfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 18,
    category: "Vegetables",
    subcategory: "Spinaches",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Spinach",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 19,
    category: "Vegetables",
    subcategory: "Pumpkins",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Pumpkin",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 20,
    category: "Vegetables",
    subcategory: "Peas",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Peas",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 21,
    category: "Fruits",
    subcategory: "Dragonfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Dragonfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 22,
    category: "Fruits",
    subcategory: "Passionfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Passionfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 23,
    category: "Vegetables",
    subcategory: "Spinaches",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Spinach",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 24,
    category: "Vegetables",
    subcategory: "Pumpkins",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Pumpkin",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 25,
    category: "Vegetables",
    subcategory: "Peas",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Peas",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 26,
    category: "Fruits",
    subcategory: "Dragonfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Dragonfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 27,
    category: "Fruits",
    subcategory: "Passionfruites",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Passionfruit",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 28,
    category: "Vegetables",
    subcategory: "Spinaches",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Spinach",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 29,
    category: "Vegetables",
    subcategory: "Pumpkins",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Pumpkin",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 30,
    category: "Vegetables",
    subcategory: "Peas",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Peas",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/424894/react-logo-programming.svg",
      },
    ],
  },
  {
    id: 31,
    category: "Fruits",
    subcategory: "Apples",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: false,
    name: "Apple Orange",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/485333/apple.svg",
      },
    ],
  },
  {
    id: 33,
    category: "Fruits",
    subcategory: "Test1",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
  {
    id: 34,
    category: "Fruits",
    subcategory: "Test2",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
  {
    id: 35,
    category: "Fruits",
    subcategory: "Test3",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
  {
    id: 36,
    category: "Fruits",
    subcategory: "Test4",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
  {
    id: 37,
    category: "Fruits",
    subcategory: "Test5",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
  {
    id: 38,
    category: "Fruits",
    subcategory: "Test6",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
  {
    id: 39,
    category: "Fruits",
    subcategory: "Test7",
    price: {
      currentPrice: getRandom(30, 60),
      initialPrice: getRandom(60, 150),
    },
    stocked: true,
    name: "Apple Green from Anne of Green Gables",
    weight: 80,
    measurement: "g",
    imagesSmall: [
      {
        id: 0,
        url: "https://www.svgrepo.com/show/484758/apple-part-2.svg",
      },
    ],
  },
];
