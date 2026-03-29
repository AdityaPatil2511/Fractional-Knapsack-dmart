import { useState, useEffect } from "react";

function ProductCard({ item, onSelect }) {
  const [qty, setQty] = useState("");

  useEffect(() => {
    setQty(item.qty || "");
  }, [item.qty]);

  return (
    <div className="card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>

      <p className="price">
        ₹{item.price}/{item.unit}
      </p>

      <input
        type="number"
        placeholder={`Enter Quantity (${item.unit})`}
        value={qty}
        onChange={(e) => {
          const value = e.target.value;
          setQty(value);
          onSelect(item.name, Number(value), item.price, item.profit, item.unit);
        }}
      />
    </div>
  );
}

export default ProductCard;