import React from 'react'


const FaqItem = ({item}) => {
  return (
    <div className="faq-card">
      <div className="item">
          <div className="title">
              <h4>{item.title}</h4>
              <button className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
          </button>
          </div>
          <div className="content">
              <p>{item.content}</p>
          </div>
      </div>
    </div>
  )
}

export default FaqItem
