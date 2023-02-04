export function checkFullName(name) {
    const names = name.split(' ');
    return names.length >= 2 ? true : false;
}

export function checkEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkPassword(password) {
    const minLength = 8;
    const maxLength = 20;
    return (password.length >= minLength && password.length <= maxLength) ? true : false
}

export function checkOccupation(occupation) {
    return occupation !== '' ? true : false
}

export function checkState(state) {
    return state !== '' ? true : false
}

export function checkFullForm(formState) {
    return checkFullName(formState.name) && checkEmail(formState.email) 
        && checkPassword(formState.password) && checkOccupation(formState.occupation) 
        && checkState(formState.state) ? true : false;
}