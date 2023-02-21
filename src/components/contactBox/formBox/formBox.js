import React, { useState } from 'react'
import classes from '../formBox/formBox.module.css'
const FormBox = () => {
    // getting form data
    const [payload, setPayLoad] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handledClick = (e) => {
        setPayLoad((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(payload)
    }
    return (
        <form className={classes.form}>
            <h3>Leave us a message</h3>
            <div className={classes.inputs}>
                <input  onChange={handledClick} name="name" value={payload.name} type="text" placeholder="Name" />
                <input onChange={handledClick} name="email" value={payload.email} type="text" placeholder="Email Address" />
                <textarea onChange={handledClick} name="message" value={payload.message} placeholder="Your Messages"></textarea>
                <button onClick={handleSubmit}>Send</button>
            </div>
        </form>
    )
}

export default FormBox;