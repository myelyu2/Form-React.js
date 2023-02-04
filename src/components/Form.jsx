import React from 'react'
import '../styles/App.css';

// form component
const Form = ({ children, onSubmit }) => (
    <form className='form-container' onSubmit={onSubmit}>
        {children}
    </form>
)

export default Form