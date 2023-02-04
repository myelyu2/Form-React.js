import { postData } from './axios-api-setup';
import { checkFullName, checkEmail, checkPassword, checkOccupation, checkState, checkFullForm } from './FormChecker'


export const handleChange = (e, formState, setFormState, formValid, setFormValid) => {
    const { name, value } = e.target;
    setFormValid({
        ...formValid,
        [name]: true
    })
    setFormState({...formState, [name]: value})
}

export const handleSubmit = async (e, formState, setFormState, formValid, setFormValid, setPostStatus) => {
    e.preventDefault();

    // validation
    const isNameValid = checkFullName(formState.name);
    const isEmailValid = checkEmail(formState.email);
    const isPasswordValid = checkPassword(formState.password);
    const isOccupationValid = checkOccupation(formState.occupation);
    const isStateValid = checkState(formState.state);

    setFormValid({
        ...formValid,
        name: isNameValid,
        email: isEmailValid,
        password: isPasswordValid,
        occupation: isOccupationValid,
        state: isStateValid,
    });

    if (!checkFullForm(formState)) {
        console.log("Not valid", { isNameValid, isEmailValid, isPasswordValid, isOccupationValid, isStateValid })
        e.stopPropagation()
        return
    }

    // custom submit
    setFormState({
        name: '',
        email: '',
        password: '',
        occupation: '',
        state: '',
    })

    const res = await postData(formState)
    if (res === 201) setPostStatus(true)
   
    console.log('submitted')
    console.log(formState)
}

