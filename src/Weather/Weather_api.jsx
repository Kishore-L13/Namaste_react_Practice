import React, { useState } from 'react';

const w = [
  { name: 'London', temp: '32C', Day: 'Sunny' },
  { name: 'India', temp: '30C', Day: 'Cloudy' },
  { name: 'USA', temp: '25C', Day: 'Rainy' },
  { name: 'Dubai', temp: '40C', Day: 'Hot' }
];

const Weather_api = () => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState([]);

  const filtered = (inputVal) => {
    setInput(inputVal);
    if (inputVal.trim() === '') {
      setSearch([]);
      setIsOpen(false);
      return;
    }
    const filter = w.filter((item) =>
      item.name.toLowerCase().includes(inputVal.toLowerCase())
    );

    setSearch(filter);
    setIsOpen(true);
  };

  return (
    <div style={{ padding: '1rem', width: '300px' }}>
      <input
        type='text'
        placeholder='Enter location'
        value={input}
        onChange={(e) => filtered(e.target.value)}
        onFocus={() => input && setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)} // allows click
      />

      {isOpen && search.length > 0 && (
        <div>
          {search.map((item, index) => (
            <div key={index}>
              🌍 <strong>{item.name}</strong> – {item.temp}, {item.Day}
            </div>
          ))}
        </div>
      )}

      {isOpen && search.length === 0 && input && (
        <div>
          ❌ No results found
        </div>
      )}
    </div>
  );
};

export default Weather_api;
