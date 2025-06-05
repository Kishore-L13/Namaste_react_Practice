import React from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const Table = () => {
  return (
    <div>
      <h1>Product Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Price</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS.map((item) => (
            <tr key={item.name}>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
