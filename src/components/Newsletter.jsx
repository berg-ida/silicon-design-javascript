import React, { useState } from 'react'
import notif from '../images/notification.svg'

const Newsletter = () => {
    const [formData, setFormData] = useState({ email: ''})
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, email: `Your email adress is required.`})) 
        }
        else {
            setErrors(prevErrors => ({...prevErrors, email: ''})) 
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `Your email adress is required.`
            }
        })

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ email: '' })
        }

    }

    if (submitted) {
        return (
            <div className="wrapper">
                <div className="infobox">
                    <h1>Thank you for your subscription!</h1>
                    <button className="btn-success" onClick={handleOk}>OK</button>
                </div>
            </div>
        )
    }

  return (
    <section className="newsletter">

        <form onSubmit={handleSubmit} noValidate>
            <div className="notification">
                <img id="notif" src={notif} alt="Notification Logo"/>
                <h3 className="mobile-text">Subscribe to our newsletter</h3>
                <h3 className="desktop-text">Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <div className="input-box body">
                <i className="fa-regular fa-envelope icon"></i>
                <input id="form-input" className="form-input email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email"/>
                <button type="submit" className="btn">Subscribe</button>
                <span>{errors.email && errors.email}</span>
            </div>
        </form>
        
    </section>
  )
}

export default Newsletter
