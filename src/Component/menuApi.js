import halwapoori from "./images/0.png"
import haleem from "./images/1.png"
import biryani from "./images/2.png"
import pulao from "./images/3.png"
import bbq from "./images/4.png"
import zinger from "./images/5.png"
import samosa from "./images/6.PNG"
import kachori from "./images/7.png"
import soup from "./images/8.PNG"
import juice from "./images/9.png"
import pizza from "./images/10.PNG"
import karahi from "./images/11.png"
import rabri from "./images/12.PNG"
import custard from "./images/13.PNG"
import qourma from "./images/14.PNG"
import choco from "./images/15.PNG"
import bf from "./images/16.PNG"
import rw from "./images/17.PNG"
import dc from "./images/18.PNG"
import rasmalai from "./images/19.PNG"
import labesheeren from "./images/20.PNG"
import dd from "./images/21.PNG"
import zr from "./images/22.PNG"
import cr from "./images/23.PNG"
import kr from "./images/24.PNG"
import nihari from "./images/25.PNG"
import anda from "./images/26.PNG"
import paratha from "./images/27.PNG"
import chai from "./images/28.PNG"
import pudding from "./images/29.PNG"
import gg from "./images/30.PNG"
import nuggets from "./images/31.PNG"
import ff from "./images/32.PNG"
import naan from "./images/33.PNG"
import poori from "./images/34.PNG"
import pakora from "./images/35.PNG"
import db from "./images/36.PNG"
import paya from "./images/38.PNG"
import sabzi from "./images/39.PNG"
import daal from "./images/40.PNG"
import roti from "./images/41.PNG"

const Menu = [
    {
        id: 1,
        image: halwapoori,
        name: "Halwa Poori",
        category: "breakfast",
        price: 40,
    },
    {
        id: 2,
        image: haleem,
        name: "Haleem",
        category: "lunch",
        price: 120,
    },
    {
        id: 3,
        image: biryani,
        name: "Biryani",
        category: "lunch",
        price: 150,
    },
    {
        id: 4,
        image: pulao,
        name: "Pulao",
        category: "lunch",
        price: 180,
    },
    {
        id: 5,
        image: bbq,
        name: "Bar B Que",
        category: "special",
        price:  1000,
    },
    {
        id: 6,
        image: zinger,
        name: "Zinger Burger",
        category: "special",
        price: 450,
    },
    {
        id: 7,
        image: samosa,
        name: "samosa",
        category: "evening",
        price: 40,
    },
    {
        id: 8,
        image: kachori,
        name: "Kachori",
        category: "evening",
        price: 25,
    },
    {
        id: 9,
        image: soup,
        name: "Corn Soup",
        category: "starter",
        price: 300,
    },
    {
        id: 10,
        image: juice,
        name: "Fresh Juices",
        category: "starter",
        price: 190,
    },
    {
        id: 11,
        image: pizza,
        name: "Pizza",
        category: "special",
        price: 2000,
    },
    {
        id: 12,
        image: karahi,
        name: "Karahi",
        category: "dinner",
        price: 1800,
    },
    {
        id: 13,
        image: rabri,
        name: "Rabri",
        category: "desert",
        price: 300,
    },
    {
        id: 14,
        image: custard,
        name: "Custard",
        category: "desert",
        price: 200,
    },
    {
        id: 15,
        image: qourma,
        name: "Beef Qourma",
        category: "dinner",
        price: 300,
    },
    {
        id: 16,
        image: choco,
        name: "Chocolate",
        category: "cake",
        price: 800,
    },
    {
        id: 17,
        image: bf,
        name: "Black Forest",
        category: "cake",
        price: 1200,
    },
    {
        id: 18,
        image: rw,
        name: "Red Welvet",
        category: "cake",
        price: 1500,
    },
    {
        id: 19,
        image: dc,
        name: "Dark Chocolate",
        category: "cake",
        price: 1000,
    },
    {
        id: 20,
        image: rasmalai,
        name: "Ras Malai",
        category: "desert",
        price: 400,
    },
    {
        id: 21,
        image: labesheeren,
        name: "Frit Trifle",
        category: "desert",
        price: 300,
    },
    {
        id: 22,
        image: dd,
        name: "Dulhari",
        category: "desert",
        price: 300,
    },
    {
        id: 23,
        image: zr,
        name: "Zinger Roll",
        category: "special",
        price: 200,
    },
    {
        id: 24,
        image: cr,
        name: "Chicken Roll",
        category: "special",
        price: 220,
    },
    {
        id: 25,
        image: kr,
        name: "Kebab Roll",
        category: "special",
        price: 230,
    },
    {
        id: 26,
        image: nihari,
        name: "Nihari",
        category: "breakfast",
        price: 300,
    },
    {
        id: 27,
        image: anda,
        name: "Anda Chana",
        category: "breakfast",
        price: 200,
    },
    {
        id: 28,
        image: paratha,
        name: "Paratha",
        category: "breakfast",
        price: 40,
    },
    {
        id: 29,
        image: chai,
        name: "Doodh Patti",
        category: "breakfast",
        price: 40,
    },
    {
        id: 30,
        image: pudding,
        name: "Pudding",
        category: "desert",
        price: 150,
    },
    {
        id: 31,
        image: gg,
        name: "Gol Gappay",
        category: "starter",
        price: 140,
    },
    {
        id: 32,
        image: nuggets,
        name: "Nuggets",
        category: "starter",
        price: 400,
    },
    {
        id: 33,
        image: ff,
        name: "French Fries",
        category: "starter",
        price: 150,
    },
    {
        id: 34,
        image: naan,
        name: "Naan",
        category: "lunch",
        price: 35,
    },
    {
        id: 35,
        image: poori,
        name: "Poori Paratha",
        category: "special",
        price: 100,
    },
    {
        id: 36,
        image: pakora,
        name: "Pakora",
        category: "evening",
        price: 150,
    },
    {
        id: 37,
        image: db,
        name: "Dahi Baray",
        category: "evening",
        price: 160,
    },
    {
        id: 38,
        image: chai,
        name: "Doodh Patti",
        category: "evening",
        price: 40,
    },
    {
        id: 39,
        image: paya,
        name: "Paya",
        category: "dinner",
        price: 250,
    },
    {
        id: 40,
        image: sabzi,
        name: "Sabzi",
        category: "dinner",
        price: 140,
    },
    {
        id: 41,
        image: daal,
        name: "Daal",
        category: "dinner",
        price: 100,
    },
    {
        id: 42,
        image: roti,
        name: "Chapati",
        category: "dinner",
        price: 20,
    },
];

export default Menu;