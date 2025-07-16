import React, { useState } from 'react';
const accordionItems = [
    {
      title: 'Accordion Item 1',
      content: 'This is the content of the first item.'
    },
    {
      title: 'Accordion Item 2',
      content: 'Here is some more information in the second item.'
    },
    {
      title: 'Accordion Item 3',
      content: 'And this is the third accordion item.'
    }
  ];
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 border rounded">
      {accordionItems.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white text-sm text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default  Accordion

