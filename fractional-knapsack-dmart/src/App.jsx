import { useState } from "react";
import data from "./data";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [results, setResults] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  const handleSelect = (name, qty, price, profit, unit) => {
    setSelectedItems((prev) => {
      const filtered = prev.filter((i) => i.name !== name);
      if (qty > 0) {
        filtered.push({ name, qty, price, profit, unit });
      }
      return filtered;
    });
  };

  const calculate = () => {
    let remaining = Number(budget);
    let items = [...selectedItems];

    items.sort((a, b) => (b.profit / b.price) - (a.profit / a.price));

    let output = [];
    let profitSum = 0;

    items.forEach((item) => {
      let totalCost = item.qty * item.price;

      if (remaining > 0) {
        if (remaining >= totalCost - 0.0001) {
          remaining -= totalCost;
          let gained = item.qty * item.profit;
          profitSum += gained;

          output.push({
            ...item,
            obtained: item.qty,
            gained,
            full: true
          });
        } else {
          let obtained = remaining / item.price;
          let gained = obtained * item.profit;
          profitSum += gained;

          output.push({
            ...item,
            obtained,
            gained,
            full: false
          });

          remaining = 0;
        }
      }
    });

    setResults(output);
    setTotalProfit(profitSum);
  };

  return (
    <div className="bg-container">
      <div className="overlay">

        <h1>Fractional Knapsack Mall Shopping</h1>

        <input
          type="number"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="grocery">Grocery</option>
          <option value="dryfruits">Dry Fruits</option>
          <option value="snacks">Snacks</option>
        </select>

        {category && (
          <>
            <h2>{category.toUpperCase()}</h2>

            <div className="products">
              {data[category].map((item) => (
                <ProductCard
                  key={item.name}
                  item={{
                    ...item,
                    qty:
                      selectedItems.find((i) => i.name === item.name)?.qty || ""
                  }}
                  onSelect={handleSelect}
                />
              ))}
            </div>

            <button onClick={calculate}>Calculate</button>

            {results.map((item) => (
              <div className="result-box" key={item.name}>
                <b>{item.name}</b><br /><br />

                Quantity = {item.obtained.toFixed(2)} {item.unit}<br />
                Price per {item.unit} = ₹{item.price}<br />
                Total Cost = ₹{(item.obtained * item.price).toFixed(2)}<br />

                {item.full ? "Full selected" : "Partial selected"}<br />
              </div>
            ))}

            {results.length > 0 && (
              <div className="result-box">
                <b>Total Value:</b> ₹{totalProfit.toFixed(2)}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default App;