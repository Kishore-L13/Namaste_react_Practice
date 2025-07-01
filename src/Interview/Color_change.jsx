import React from 'react'
const Color_change = () => {
    const data = [{ name: "mango", value: "yellow" },
  { name: "apple", value: "red" },{ name: "Orange", value: "orange" }];
  const [input, setInput] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleChange = (e) => {
    const val = e.target.value.toLowerCase();
    setInput(val);

    const matchedItem = data.find((item) =>
      item.value.toLowerCase().includes(val) ||  item.name.toLowerCase().includes(val)
    );

    if (matchedItem) {
      setBgColor(matchedItem.value); // Set background to matched color
    } else {
      setBgColor(""); // No match, reset background
    }
  };

    return (
        <div>
      <input
        type="text"
        placeholder="Type color like"
        value={input}
        onChange={handleChange}
      />
      <div
        style={{
          marginTop: "20px",
          height: "100px",
          backgroundColor: bgColor || "transparent", // ✅ no color if empty
          border: "1px solid #ccc",
        }}
      >
        {bgColor ? `Background is ${bgColor}` : "No matching color"}
      </div>
    </div>
    )
}
export default Color_change
