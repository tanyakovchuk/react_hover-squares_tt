import React from 'react';
import './Form.scss';

export function Form({handleSubmit, data, mode}) {
    return (
        <form className='form'>
            <lable  className='form__title'>
                Pike mode
            </lable>
            <select
                className='form__select'
                name='mode'
                value={mode}
                onChange={handleSubmit}
            >
                <option value='' disabled selected>Pick mode</option>
                {Object.entries(data).map(([key], i) => (
                    <option key={i} value={key}>
                        {key}
                    </option>
                ))}
            </select>
        </form>
    )
}
