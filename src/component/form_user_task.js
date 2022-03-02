import React from "react";
import {Field, Formik} from "formik";

const FormUserTask = ({handleSubmit}) => (

    <Formik initialValues={{username: '', email: '', text: ''}} onSubmit={handleSubmit}>
        {({
              values, errors, touched,
              handleChange, handleBlur,
              handleSubmit, isValid, dirty, isSubmitting,onReset,
          }) => (
            <form onSubmit={handleSubmit}>

                <label htmlFor={'username'}>Name</label>
                <Field required={'username'}
                       type="text"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.username}
                       name="username"
                       placeholder={'name'}
                />
                {touched.name && errors.name && <div className={'error'} id="feedback">{errors.name}</div>}
                {/*{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}*/}
                <label htmlFor={'Email'}>Email</label>
                <Field required={'email'}
                       type="email"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.email}
                       name="email"
                       placeholder={'email'}
                />
                {touched.email && errors.email && <div className={'error'} id="feedback">{errors.email}</div>}
                <label htmlFor={'Text'}>Text</label>
                <Field required={'text'}
                       component={'textarea'}
                       type="textarea"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.text}
                       name="text"
                       placeholder={'add task'}
                />
                {touched.text && errors.text && <div className={'error'} id="feedback">{errors.text}</div>}
                <div>
                    <button  type="submit">Submit</button>
                </div>
            </form>
        )}
    </Formik>
 )

export default FormUserTask