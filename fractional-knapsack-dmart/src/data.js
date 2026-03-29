import rice from "./assets/rice.jpg";
import milk from "./assets/milk.jpg";
import wheat from "./assets/wheat.jpg";
import almonds from "./assets/almonds.jpg";
import cashews from "./assets/cashews.jpg";
import raisins from "./assets/raisins.jpg";
import chips from "./assets/chips.jpg";
import chocolate from "./assets/chocolate.jpg";
import juice from "./assets/juice.jpg";

const data = {
  grocery: [
    { name: "Rice", price: 10, profit: 50, unit: "kg", image: rice },     // 10×5
    { name: "Wheat", price: 12, profit: 36, unit: "kg", image: wheat },   // 12×3
    { name: "Milk", price: 15, profit: 30, unit: "litre", image: milk }   // 15×2
  ],

  dryfruits: [
    { name: "Almonds", price: 25, profit: 125, unit: "kg", image: almonds }, // 25×5
    { name: "Cashews", price: 20, profit: 100, unit: "kg", image: cashews }, // 20×5
    { name: "Raisins", price: 18, profit: 54, unit: "kg", image: raisins }   // 18×3
  ],

  snacks: [
    { name: "Chips", price: 20, profit: 30, unit: "packet", image: chips },       // 20×1.5
    { name: "Chocolate", price: 30, profit: 45, unit: "packet", image: chocolate }, // 30×1.5
    { name: "Juice", price: 25, profit: 40, unit: "litre", image: juice }          // 25×1.6 approx
  ]
};

export default data;