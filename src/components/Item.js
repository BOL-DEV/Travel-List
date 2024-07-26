const Item = ({ item, handleDeleteItems, handleStatus }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleStatus(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.number} {item.description}
      </span>
      <button onClick={() => handleDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item