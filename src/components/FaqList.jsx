import React, { useState, useEffect } from 'react'
import FaqItem from './FaqItem'
import Accordion from './Accordion'

const FaqList = () => {
  const [faqItems, setFaqItems] = useState([])
  
    const fetchData = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setFaqItems(data)
    }

  useEffect(() => {
    fetchData()
  }, [])
  
    return (
    <div className="qna">
        <Accordion items={faqItems} />
    </div>
  )
}

export default FaqList
