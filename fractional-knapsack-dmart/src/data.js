import rice from "./assets/rice.jpg";
import almonds from "./assets/almond.jpg";
import chips from "./assets/chips.jpg";
import cashews from "./assets/cashews.jpg";

const data = {
  grocery: [
    { name: "Rice", price: 10, profit: 60, unit: "kg", image: rice },
  ],
  dryfruits: [
    { name: "Almonds", price: 25, profit: 125, unit: "kg", image: almonds },
    { name: "Cashews", price: 20, profit: 110, unit: "kg", image: cashews },
  ],
  snacks: [
    { name: "Chips", price: 10, profit: 35, unit: "packet", image: chips },
  ],
};

export default data;