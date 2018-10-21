import React from 'react';

const CheckBoxField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
      <div className="radio">  
        <label><input {...input} type={type}/> {label}</label>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

export default CheckBoxField;