import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/App.css'

// Generic text input field
const TextInputField = ({ valid, label, name, type, value, placeholder, handleChange, errorMsg }) => (
    <Form.Group controlId={name.concat("-textInput")}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className={`form-input ${valid ? '' : 'invalid'}`}
            type={type} 
            value={value}
            placeholder={placeholder}
            name={name} 
            onChange={handleChange}
            autoComplete="on"
        />
        <Form.Control.Feedback className='error-msg' type="invalid">
            {errorMsg}
        </Form.Control.Feedback>
    </Form.Group>
);

export default TextInputField;