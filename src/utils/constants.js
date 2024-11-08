export const categories = [
    {
      id: 1,
      name: "Pizza",
     
       image: require("../../assets/categories/pizza.png"), 
    },
    {
      id: 2,
      name: "Burger",
      image: require("../../assets/categories/hamburger.png"),
    },
    {
      id: 3,
      name: "Italian",
      image: require("../../assets/categories/spaghetti.png"),
    },
    {
      id: 4,
      name: "Chinese",
      image: require("../../assets/categories/takeoutbox.png"),
    },
    {
      id: 5,
      name: "Noodle",
      image: require("../../assets/categories/hamburger.png"),
    },
    {
      id: 6,
      name: "Sweets",
      image: require("../../assets/categories/cupcake.png"),
    },
  ];
  
  export const featured = [
    {
      id: 1,
      title: "Hot and Spicy",
      description: "soft and tender fried chicken",
      restaurant: [
        {
          id: 1,
          name: "Papa Johns",
          image: require("../../assets/restaurants/papa-pizza.jpg"),
          description: "Hot and spicy pizzas",
          lng: 32.2145602,
          lat: 39.432341,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
            {
              id: 2,
              name: "pizza1",
              description: "cheezy garlic pizza",
              price: 12,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
            {
              id: 3,
              name: "pizza2",
              description: "cheezy garlic pizza",
              price: 13,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
          ],
        },
        {
          id: 2,
          name: "Papa Johns",
          image: require("../../assets/restaurants/papa-pizza.jpg"),
          description: "Hot and spicy pizzas",
          lng: 38.2145602,
          lat: 32.432341,
          address: "434 second street",
          stars: 3,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 12,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 13,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
          ],
        },
        {
          id: 3,
          name: "Papa Johns",
          image: require("../../assets/restaurants/papa-pizza.jpg"),
          description: "Hot and spicy pizzas",
          lng: 38.2145602,
          lat: 32.432341,
          address: "434 second street",
          stars: 4,
          reviews: "4.4k",
          category: "Fast Food",
          dishes: [
            {
              id: 1,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 10,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
            {
              id: 2,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 12,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
            {
              id: 3,
              name: "pizza",
              description: "cheezy garlic pizza",
              price: 13,
              image: require("../../assets/dishes/pizza.jpeg"),
            },
          ],
        },
      ],
    },
  ];
  