import React from 'react';
import '../styles/App.css'


const SubmitButton = ({ label }) => (
    <button type="submit" className='form-submit-button'>
        {label}
    </button>
);

export default SubmitButton;
