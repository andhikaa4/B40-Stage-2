import React from "react";
import Gambar1 from './foodImage/1c.png'
import Gambar2 from './foodImage/2c.png'
import Gambar3 from './foodImage/3c.png'
import Gambar4 from './foodImage/4c.png'
import Gambar5 from './foodImage/5c.png'

import KFC from './foodImage/kfc.png'
import JCO from './foodImage/jco.png'
import BK from './foodImage/BK.png'
import SB from './foodImage/sb.png'



export const user = [
    {
      id: 1,
      name: "KFC",
      logo: KFC,
      role: "partner",
      product: [
        {
          name: "Chicken Wings",
          price: 15000,
          image: Gambar3
        },
        {
          name: "Geprek Chicken",
          price: 20000,
          image: Gambar2
        },
        {
          name: "Chicken Combo",
          price: 200000,
          image: Gambar1
        },
      ]
    },
    {
      id: 2,
      name: "Burger King",
      logo: BK,
      role: "partner",
      product: [
        {
          name: "Double Cheese",
          price: 25000,
          image: Gambar5
        },
        {
          name: "King Burger",
          price: 60000,
          image: Gambar4
        },
        {
          name: "Chicken Burger",
          price: 15000,
          image: Gambar3
        },
      ]
    },
    {
      id: 3,
      name: "JCO",
      logo: JCO,
      role: "partner",
      product: [
        {
          name: "Snoop Dough",
          price: 200000,
          image: Gambar2
        },
        {
          name: "Dr Doughnut",
          price: 20000,
          image: Gambar5
        },
        {
          name: "JCO Special",
          price: 55000,
          image: Gambar4
        },
      ]
    },
    {
      id: 4,
      name: "Starbuck",
      logo: SB,
      role: "partner",
      product: [
        {
          name: " Coffee Latte ",
          price: 17000,
          image: Gambar1
        },
        {
          name: "Coffee Arabica",
          price: 22000,
          image: Gambar2
        },
        {
          name: "Americano",
          price: 30000,
          image: Gambar3
        },
      ]
    },
    {
      id: 4,
      name: "Starbuck",
      logo: SB,
      role: "partner",
      product: [
        {
          name: " Coffee Latte ",
          price: 17000,
          image: Gambar1
        },
        {
          name: "Coffee Arabica",
          price: 22000,
          image: Gambar2
        },
        {
          name: "Americano",
          price: 30000,
          image: Gambar3
        },
      ]
    },
    {
      id: 4,
      name: "Starbuck",
      logo: SB,
      role: "partner",
      product: [
        {
          name: " Coffee Latte ",
          price: 17000,
          image: Gambar1
        },
        {
          name: "Coffee Arabica",
          price: 22000,
          image: Gambar2
        },
        {
          name: "Americano",
          price: 30000,
          image: Gambar3
        },
      ]
    },
    {
      id: 4,
      name: "Starbuck",
      logo: SB,
      role: "partner",
      product: [
        {
          name: " Coffee Latte ",
          price: 17000,
          image: Gambar1
        },
        {
          name: "Coffee Arabica",
          price: 22000,
          image: Gambar2
        },
        {
          name: "Americano",
          price: 30000,
          image: Gambar3
        },
      ]
    },
]

// console.log(user[index].name);

// user[index].product.map((item))



  export default user;