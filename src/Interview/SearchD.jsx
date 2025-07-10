import React, { useState, useMemo } from 'react';

// 🛠️ Custom debounce function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const items = ['a', 'b', 'c', 'd', 'ab', 'abc', 'abcd'];

function SearchD() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // ✅ Fix: No .current needed here
  const debouncedSearch = useMemo(() => 
    debounce((value) => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      console.log('Debounced search result:', filtered);
    }, 500)
  , [items]);

  // 🧠 Handle user typing
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '250px',
          borderRadius: '6px',
          border: '1px solid #888',
        }}
      />

      <ul style={{ marginTop: '20px' }}>
        {results.map((item, index) => (
          <li key={index} style={{ fontSize: '16px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchD;
