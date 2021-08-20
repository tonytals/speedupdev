import React from 'react';
import './style.css';

const BrDatePicker = props => {
    return (
        <div className="br-select">
            <div >
                <label htmlFor={props.id}>{props.label}</label>
                <input className="brDate" type="date" 
                    name={props.name ? props.name : props.id} 
                    id={props.id} 
                    required={props.required ? props.required : false}
                    onChange={props.onChange} 
                    value={props.defaultValue ? props.defaultValue : ''}
                    />
            </div>            
        </div>
    )
}

export default BrDatePicker;