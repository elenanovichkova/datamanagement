import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from "./components/TextField.js";
import RadioField from "./components/RadioField.js";
import SelectField from "./components/SelectField.js";

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <div>
          <Field
            label="First Name"
            name="firstName"
            component={TextField}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            label="Last Name"
            name="lastName"
            component={TextField}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            label="Email"
            name="email"
            component={TextField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div className="row">
            <div className="col-md-1"><Field label="Male" name="sex" component={RadioField} type="radio" value="male" /></div>
            <div className="col-md-1"><Field label="Female" name="sex" component={RadioField} type="radio" value="female" /></div>           
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
        <Field
            name="color"
            label="Color"
            placeholder="color"
            options={[{id:'0',value:'',descr:'select'},{id:'1',value:'green',descr:'green'},{id:'2',value:'yellow',descr:'yellow'}]}
            component={SelectField}
          />
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <div className="row">
            <div className="col-sm-1"><button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button></div>
            <div className="col-sm-1"><button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">
          Clear Values
        </button></div>
        </div>        
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Form);