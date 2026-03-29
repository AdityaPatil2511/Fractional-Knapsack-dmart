import { useState } from "react";
import data from "./data";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [results, setResults] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);

  const handleSelect = (name, qty, price, profit, unit) => {
    setSelectedItems((prev) => {
      const filtered = prev.filter((item) => item.name !== name);
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
        if (remaining >= totalCost) {
          remaining -= totalCost;
          let gained = item.qty * item.profit;
          profitSum += gained;

          output.push({
            ...item,
            obtained: item.qty,
            gained,
            full: true,
          });
        } else {
          let obtained = remaining / item.price;
          let gained = obtained * item.profit;
          profitSum += gained;

          output.push({
            ...item,
            obtained,
            gained,
            full: false,
          });

          remaining = 0;
        }
      }
    });

    setResults(output);
    setTotalProfit(profitSum);
    setRemainingBudget(remaining);
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
          <option value="dairy">Dairy</option>
          <option value="beverages">Beverages</option>
        </select>

        {category && (
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        
        {category && (
          <>
            <h2 style={{ marginTop: "30px" }}>
              {category.toUpperCase()}
            </h2>

            <div className="products">
              {data[category]
                ?.filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <ProductCard
                    key={item.name}
                    item={item}
                    onSelect={handleSelect}
                  />
                ))}
            </div>

            <button onClick={calculate}>Calculate</button>

            {results.map((item) => (
              <div className="result-box" key={item.name}>
                <b>{item.name}</b><br /><br />

                Required Quantity = {item.qty} {item.unit}<br />
                Price per {item.unit} = ₹{item.price}<br />
                Profit per {item.unit} = ₹{item.profit}<br /><br />

                Total Cost = {item.qty} × ₹{item.price} = ₹{(item.qty * item.price).toFixed(2)}<br />

                {item.full ? (
                  <>
                    Full quantity selected<br />
                    Profit = {item.qty} × ₹{item.profit} = ₹{item.gained.toFixed(2)}
                  </>
                ) : (
                  <>
                    Partial quantity selected<br />
                    Quantity Obtained = {item.obtained.toFixed(2)} {item.unit}<br />
                    Profit = {item.obtained.toFixed(2)} × ₹{item.profit} = ₹{item.gained.toFixed(2)}
                  </>
                )}
              </div>
            ))}

            {results.length > 0 && (
              <div className="result-box">
                <b>Total Profit:</b> ₹{totalProfit.toFixed(2)}<br />
                <b>Remaining Budget:</b> ₹{remainingBudget.toFixed(2)}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default App;