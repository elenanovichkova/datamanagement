import React from 'react';

const TextareaField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
      <label>{label}</label>
      <div>
        <textarea {...input} type={type} placeholder={label} className="form-control"/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

export default TextareaField;