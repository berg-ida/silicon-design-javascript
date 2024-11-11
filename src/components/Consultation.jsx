import React, { useState } from 'react'

const Consultation = () => {
    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '' ) {
            setErrors(prevErrors => ({...prevErrors, [name]: 'This field is required.'}))
        }
        else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit =  async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = 'This field is required.'
            }
        })

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ fullName: '', email: '', specialist: '' })
        }
    }

    if (submitted) {
        return (
            <div className="wrapper0">
                <div className="infobox">
                    <h1>Thank you for your request!</h1>
                    <p>We will get back to you about your consultation as soon as possible.</p>
                    <button className="btn-success" onClick={handleOk}>OK</button>
                </div>
            </div>
        )
    }



  return (
    <div className="consultation">
        <h2>Get Online Consultation</h2>
    
        <form id="consultationForm" className="consultation-form" onSubmit={handleSubmit} noValidate>
        
            <div className="input-group">
                <label for="fullName" className="form-label">Full name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Full name" id="fullName" className="form-input"/>
                <span className="span0">{errors.fullName && errors.fullName}</span>
            </div>

            <div className="input-group">
                <label for="email" className="form-label">Email adress</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" id="email" className="form-input"/>
                <span className="span1">{errors.email && errors.email}</span>
            </div>

            <div className="input-group">
                <label for="specialist" className="form-label">Specialist</label>
                <input type="text" name="specialist" value={formData.specialist} onChange={handleChange} required placeholder="Specialist" id="specialist" className="form-input"/>
                <span className="span2">{errors.specialist && errors.specialist}</span>
            </div>

            <button id="submit-button" type="submit" className="btn">Make an appointment</button>

        </form>

</div>
  )
}

export default Consultation
