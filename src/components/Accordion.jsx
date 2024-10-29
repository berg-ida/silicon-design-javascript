import React, { useState } from 'react';

    // koden för accordion är delvis lånad av chat-gpt
    
    const Accordion = ({ items }) => {
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      return (
        <div className="accordion">
          {items.map((item, index) => (
            <div key={index} className="faq-card">
              <div className="item" onClick={() => toggleItem(index)}>
                <div className="title">
                  <h4>{item.title}</h4>
                  <button className={`btn-circle ${openIndex === index ? 'active' : ''}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
                <div className={`content ${openIndex === index ? 'active' : ''}`}>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default Accordion;