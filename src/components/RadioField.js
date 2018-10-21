import React from 'react';

const RadioField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
      <div className="radio">  
        <label><input {...input} type={type} placeholder={label}/> {label}</label>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

export default RadioField;