import React, { useState, useEffect } from 'react'
import { getCachedData } from '../misc/utils/axios-api-setup'
import { Form, TextInputField, DropdownField, SubmitButton, SubmittedMsg, handleChange, handleSubmit } from './index'
import '../styles/App.css'

const MyForm = () => {
    // all form data
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        occupation: '',
        state: '',
    })

    // data validation
    const [formValid, setFormValid] = useState({
        name: true,
        email: true,
        password: true,
        occupation: true,
        state: true,
    })

    // create lists of options for states and occupations
    const [ occupationOptions, setOccupationOptions ] = useState([''])
    const [ stateOptions, setStateOptions ] = useState([''])
    
    // store port status code
    const [ postStatus, setPostStatus ] = useState(false)

    // functions to change and submit events for the form
    const submit = (event) => handleSubmit(event, formState, setFormState, formValid, setFormValid, setPostStatus)
    const change = (event) => handleChange(event, formState, setFormState, formValid, setFormValid)

    // load cache data from API
    useEffect(() => {
        getCachedData().then(res => {
            setOccupationOptions(res.occupations)
            setStateOptions(res.states)
        })
    }, [])

    return (
        <Form className='form-container' noValidate onSubmit={submit}>
            <TextInputField 
                valid={formValid.name} 
                label='Full Name' 
                value={formState.name} 
                name='name' 
                type='text' 
                placeholder='Enter Full Name' 
                errorMsg='Enter a Full name' 
                handleChange={change}
            />
            <TextInputField 
                valid={formValid.email} 
                label='Email address' 
                value={formState.email} 
                name='email' type='text' 
                placeholder='Enter Email' 
                errorMsg='Enter valid Email' 
                handleChange={change} 
            />
            <TextInputField 
                valid={formValid.password} 
                label='Password' 
                value={formState.password} 
                name='password' 
                type='password' 
                placeholder='Create Password' 
                errorMsg='Enter between 8 and 20 characters' 
                handleChange={change} 
            />
            <DropdownField 
                valid={formValid.occupation} 
                options={occupationOptions} 
                label='Occupation' 
                value={formState.occupation} 
                name='occupation' 
                errorMsg='Choose your occupation' 
                handleChange={change}
            />
            <DropdownField 
                valid={formValid.state} 
                options={stateOptions} 
                label='State' 
                value={formState.state} 
                name='state'
                errorMsg='Choose your state' 
                handleChange={change}
            />
            <SubmitButton label={'Submit'}/>

            {postStatus && <SubmittedMsg/>}
        </Form>
    )
}

export default MyForm;