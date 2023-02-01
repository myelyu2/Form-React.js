import React, { useState, useEffect } from 'react'
import { getCachedData } from '../axios-api-setup'
import { Form, TextInputField, DropdownField, SubmitButton, handleChange, handleSubmit } from './index'
import '../styles/App.css'

const MyForm = () => {
    const [ occupationOptions, setOccupationOptions ] = useState([''])
    const [ stateOptions, setStateOptions ] = useState([''])
    const submit = (event) => handleSubmit(event, formState, setFormState)
    const change = (event) => handleChange(event, formState, setFormState)

    // final form data
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        occupation: '',
        state: '',
    })

    // load cache data from API
    useEffect(() => {
        getCachedData().then(res => {
            setOccupationOptions(res.occupations)
            setStateOptions(res.states)
        })
    }, [])


    return (
        <Form className='form-container' onSubmit={submit}>
            <TextInputField label='Full Name' name='name' type='text' placeholder='Enter Full Name' handleChange={change} />
            <TextInputField label='Email address' name='email' type='email' placeholder='Enter Email' handleChange={change} />
            <TextInputField label='Password' name='password' type='password' placeholder='Create Password' handleChange={change} />
            <DropdownField options={occupationOptions} label='Occupation' name='occupation' handleChange={change}/>
            <DropdownField options={stateOptions} label='State' name='state' handleChange={change}/>
            <SubmitButton label={'Submit'}/>
        </Form>
    )
}

export default MyForm;