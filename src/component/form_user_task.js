import React from 'react';
import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';

const FormUserTask = ({ handleSubmit }) => (
  <Formik initialValues={{ username: '', email: '', text: '' }} onSubmit={handleSubmit}>
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      // isValid,
      // dirty,
      // isSubmitting,
      // onReset,
    }) => (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name</label>
        <Field
          name="username"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="name"
          required="username"
          type="text"
          value={values.username}
        />
        {touched.name && errors.name && (
          <div className="error" id="feedback">
            {errors.name}
          </div>
        )}
        {/* eslint-disable-next-line max-len */}
        {/* {touched.name && errors.name && <p className={'error'}>{errors.name}</p>} */}
        <label htmlFor="Email">Email</label>
        <Field
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="email"
          required="email"
          type="email"
          value={values.email}
        />
        {touched.email && errors.email && (
          <div className="error" id="feedback">
            {errors.email}
          </div>
        )}
        <label htmlFor="Text">Text</label>
        <Field
          component="textarea"
          name="text"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="add task"
          required="text"
          type="textarea"
          value={values.text}
        />
        {touched.text && errors.text && (
          <div className="error" id="feedback">
            {errors.text}
          </div>
        )}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )}
  </Formik>
);

FormUserTask.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FormUserTask;
