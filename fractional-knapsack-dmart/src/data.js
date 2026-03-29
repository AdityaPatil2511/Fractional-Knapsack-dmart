import rice from "./assets/rice.jpg";
import milk from "./assets/milk.jpg";
import almonds from "./assets/almonds.jpg";
import cashews from "./assets/cashews.jpg";
import chips from "./assets/chips.jpg";

const data = {
  grocery: [
    { name: "Rice", price: 10, profit: 50, unit: "kg", image: rice },
    { name: "Milk", price: 15, profit: 30, unit: "litre", image: milk }
  ],

  dryfruits: [
    { name: "Almonds", price: 25, profit: 125, unit: "kg", image: almonds },
    { name: "Cashews", price: 20, profit: 100, unit: "kg", image: cashews }
  ],

  snacks: [
    { name: "Chips", price: 10, profit: 15, unit: "packet", image: chips }
  ]
};

export default data;