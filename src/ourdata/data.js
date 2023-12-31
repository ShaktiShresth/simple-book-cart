const data = [
  {
    id: 1,
    title: "The Adventures of Sherlock Holmes",
    author: "by Arthur Conan Doyle | 7 December 2020",
    price: 19.99,
    img: "https://m.media-amazon.com/images/I/516dZVA7rQL._SX346_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 2,
    title: "And Then There Were None",
    author: "by Agatha Christie | 29 March 2011",
    price: 8.99,
    img: "https://m.media-amazon.com/images/I/51MlxNgCsyL._SX308_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 3,
    title: "The Water Dancer",
    author: "by Ta-Nehisi Coates | 24 September 2019",
    price: 14.99,
    img: "https://m.media-amazon.com/images/I/51IA60IJysL._SX327_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 4,
    title: "Ninth House (Alex Stern, 1)",
    author: "by Leigh Bardugo | 8 October 2019",
    price: 24.99,
    img: "https://m.media-amazon.com/images/I/41cUxNtr5-L._SX326_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 5,
    title: "Gone Girl",
    author: "by Gillian Flynn | 22 April 2014",
    price: 12.9,
    img: "https://m.media-amazon.com/images/I/41oR8CLl6lL._SY344_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 6,
    title: "The Guardians: A Novel",
    author: "by John Grisham | 15 October 2019",
    price: 15.65,
    img: "https://m.media-amazon.com/images/I/518n8X9DFcL._SX341_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 7,
    title: "My Sister, the Serial Killer",
    author: "by Oyinkan Braithwaite | 20 November 2018",
    price: 11.99,
    img: "https://m.media-amazon.com/images/I/51ALwqXZmBL._SX309_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 8,
    title: "The Source of Self-Regard",
    author: "by Toni Morrison | 12 February 2019",
    price: 11.99,
    img: "https://m.media-amazon.com/images/I/41oFiWyh5JL._SX333_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 9,
    title: "John Adams",
    author: "by David McCullough | 3 September 2002",
    price: 14.99,
    img: "https://m.media-amazon.com/images/I/41Jo+hVNwjL._SX331_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 10,
    title: "1776",
    author: "by David McCullough | 24 May 2005",
    price: 13.99,
    img: "https://m.media-amazon.com/images/I/51eGhXmi23L._SX332_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 11,
    title: "Born a Crime",
    author: "by Trevor Noah",
    price: 9.99,
    img: "https://m.media-amazon.com/images/I/518HYIHQWHL._SX322_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 12,
    title: "Everything Is F*cked",
    author: "by Mark Manson | 14 May 2019",
    price: 19.29,
    img: "https://m.media-amazon.com/images/I/416T7uchqcL._SX329_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 13,
    title: "Dare to Lead",
    author: "by B. Brown | 1 January 2018",
    price: 14.99,
    img: "https://m.media-amazon.com/images/I/4108sPwaBfL._SX310_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 14,
    title: "Catch and Kill",
    author: "by Ronan Farrow | 15 October 2019",
    price: 16.54,
    img: "https://m.media-amazon.com/images/I/4149SBY+++S._SX323_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 15,
    title: "I'll Be Gone in the Dark",
    author: "by Michelle McNamara | 27 February 2018",
    price: 14.27,
    img: "https://m.media-amazon.com/images/I/51mqAQYYSTL._SX331_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 16,
    title: "Helter Skelter: The True Story of the Manson Murders",
    author: "by Vincent Bugliosi | 17 December 2001",
    price: 12.29,
    img: "https://m.media-amazon.com/images/I/41tnmkC2wtL._SY344_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 17,
    title: "The Testaments",
    author: "by Margaret Atwood | 10 September 2019",
    price: 15.99,
    img: "https://m.media-amazon.com/images/I/41HQI3QQOcL._SX327_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 18,
    title: "Carrie",
    author: "by Stephen King | 30 August 2011",
    price: 9.99,
    img: "https://m.media-amazon.com/images/I/51dRjo8NJeL._SY344_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 19,
    title: "The Haunting of Hill House",
    author: "by Shirley Jackson | 28 November 2006",
    price: 12.49,
    img: "https://m.media-amazon.com/images/I/51PT+eAwsVL._SY344_BO1,204,203,200_.jpg",
    amount: 1,
  },
  {
    id: 20,
    title: "The Help",
    author: "by Kathryn Stockett | 10 February 2009",
    price: 15.68,
    img: "https://m.media-amazon.com/images/I/41rc1NK5nIL._SX329_BO1,204,203,200_.jpg",
    amount: 1,
  },
];

export default data;
