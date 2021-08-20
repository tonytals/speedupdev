import React from 'react';

import './style.css';

const BrSelect = props => {
    
    return (
        <div className="br-select">
            <div className="br-input">
                <label htmlFor={props.id}>{props.label}</label>
                <select className="brSelect" 
                        id={props.id} 
                        name={props.name ? props.name : props.id}
                        required={props.required ? props.required : false}
                        onChange={props.onChange}
                        defaultValue={props.selected ? props.selected : ''}   
                        value={props.selected ? props.selected : ''}   
                                             
                        >
                    <option label="" value="">Selecione um Item</option>
                    {props.options ? 
                        props.options.map((option) =>                             
                            <option key={option} value={option}>{option}</option>                            
                            )
                            : ''
                    }
                   
                </select> 
            </div>            
        </div>
    )
}

export default BrSelect;