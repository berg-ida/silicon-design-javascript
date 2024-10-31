import React from 'react'
import quotes from '../images/quotes.svg'

const TestimonialItem = ({item}) => {
  return (
    <div className="testimonial-card">
        <div className="item">
            <img class="quotes" src={quotes} alt="" />
            <div className="star-rating">
                {Array.from ({length: item.starRating}, (_, index) => (
                    <i key={index} class="fa-solid fa-star"></i>
                ))}
            </div>
            <div className="comment">
                <p>{item.comment}</p>
            </div>
            <div className="card-bottom">
                <div className="avatar">
                    <img src={item.avatarUrl} alt="" />
                </div>
                <div className="author">
                    <p>{item.author}</p>
                </div>
                <div className="job-role">
                    <p>{item.jobRole}</p>
                </div>
            </div>
      </div>
    </div>
    
  )
}

export default TestimonialItem
