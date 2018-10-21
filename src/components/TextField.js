import React from 'react';
//import $ from "jquery";
//import popper from 'popper';
//import bootstrap from 'bootstrap';

const TextField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group">
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} className="form-control"/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

export default TextField;