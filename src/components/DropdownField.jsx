import React from "react"
import { Form } from 'react-bootstrap'
import '../styles/App.css'  

// Generic dropdown input field
const DropdownField = ({ valid, options, label, name, value, handleChange, errorMsg}) => (
    <Form.Group controlId={name.concat("dropdownField")}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className={`form-input ${valid ? '' : 'invalid'}`}
            as="select" 
            value={value}
            name={name}
            onChange={handleChange}>
                <option value=''>Select {name}</option>
                {options.map(option => (
                    <option key={option}> {option} </option>
                ))}
        </Form.Control>
        <Form.Control.Feedback className='error-msg' type="invalid">
            {errorMsg}
        </Form.Control.Feedback>
    </Form.Group>
);

export default DropdownField;
