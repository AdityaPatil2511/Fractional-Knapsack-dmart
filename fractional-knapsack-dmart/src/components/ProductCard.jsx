function ProductCard({ item, onSelect }) {
  const ratio = (item.profit / item.price).toFixed(2);

  return (
    <div className="card">
    
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>

      <p className="price">
        ₹{item.price}/{item.unit}
      </p>

      <input
  type="number"
  step="0.1"
  placeholder={`Enter Quantity (${item.unit})`}
  value={item.qty || ""}
  onChange={(e) =>
    onSelect(
      item.name,
      Number(e.target.value),
      item.price,
      item.profit,
      item.unit
    )
  }
/>
    </div>
  );
}

export default ProductCard;