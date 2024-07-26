import { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(1);

  const handleForm = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, number, packed: false, id: Date.now() };
    console.log(newItems);

    handleAddItems(newItems);

    setDescription("");
    setNumber(1);
  };

  return (
    <form className="add-form " onSubmit={handleForm}>
      <h3>What do you need for your 😍 trip?</h3>

      <select value={number} onChange={(e) => setNumber(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option className="option" value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
