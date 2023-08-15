const Item = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "li-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>X</button>
    </li>
  );
};

export default Item;
