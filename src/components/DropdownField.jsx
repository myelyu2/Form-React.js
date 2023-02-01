import React from "react"
import { Form } from 'react-bootstrap'
import '../styles/App.css'  

const DropdownField = ({ options, label, name, handleChange}) => (
    <Form.Group controlId={name.concat("dropdownField")}>
        <Form.Label>{label}</Form.Label>
        <Form.Control 
            className='form-input'
            as="select" 
            defaultValue='' 
            name={name}
            onChange={handleChange}>
                <option value=''>Select {name}</option>
                {options.map(option => (
                    <option key={option}> {option} </option>
                ))}
        </Form.Control>
    </Form.Group>
);

export default DropdownField;
