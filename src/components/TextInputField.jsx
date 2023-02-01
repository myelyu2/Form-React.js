import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/App.css'


const TextInputField = ({ label, name, type, placeholder, handleChange }) => (
    <Form.Group controlId={name.concat("-textInput")}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className='form-input'
            type={type} 
            placeholder={placeholder}
            name={name} 
            onChange={handleChange}
        />
    </Form.Group>
);

export default TextInputField;