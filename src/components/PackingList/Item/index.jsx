const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "silver" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button className="removeBnt" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
};

export default Item;
