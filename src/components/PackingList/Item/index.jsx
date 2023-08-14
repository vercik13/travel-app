export default function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "li-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  );
}
