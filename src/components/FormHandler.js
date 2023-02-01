export const handleChange = (e, formState, setFormState) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value})
}

export const handleSubmit = (e, formState, setFormState) => {
    e.preventDefault()
    console.log(formState)
    setFormState({
        name: '',
        email: '',
        password: '',
        occupation: '',
        state: '',
    })

    console.log(formState)
}
