import React from 'react';
import './styles.scss';


const FormInput = ({ handleChange, label, ...otherProps }) =>{
    return(
        <div className="formRow" {...otherProps}>
        {label &&(
           <label>

           </label> 
        )}
        
        <input className="formInput" onChange={handleChange}{...otherProps}></input>
        </div>
    )
}

export default FormInput;