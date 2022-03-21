import React from 'react';
import PropTypes from 'prop-types';
// import {useDispatch} from "react-redux";
import { Button } from 'antd';
// import {red, volcano, gold, yellow, lime, green, cyan, blue,
// geekblue, purple, magenta, grey} from '@ant-design/colors';
// import {generate, presetPalettes} from '@ant-design/colors';
import { Field, Form, Formik } from 'formik';
// import md5 from "md5";
// import $ from 'jquery';

// import { saveButton} from "../store/addTask-reducer";
import { useEditAdmin } from '../hook/useEditAdmin';

const EditAdmin = ({
  text,
  status,
  email,
  username,
  sort,
  changeSortAll,
  currentPage,
  totalCount,
  id,
  index,
  getTaskThunkCreator,
}) => {
  const {
    editStatus,
    editText,
    handleChangeText,
    handleChangeStatus,
    handleClick,
  } = useEditAdmin(
    getTaskThunkCreator,
    currentPage,
    totalCount,
    text,
    status,
    sort,
    changeSortAll,
    id,
    index,
  );

  return (
    // <div className="formik">
    <Formik id={id} initialValues={{ status, text, name: username, email }}>
      {(
        props,
        handleBlur,
        // handleChange, values, touched, errors
      ) => (
        <Form>
          <>
            <b>Name:</b>
            {username}{' '}
          </>
          <>
            <b>Email: </b>
            {email}{' '}
          </>

          <label className="label" htmlFor="Text">
            {' '}
            Text:
            <Field
              className="textarea"
              component="textarea"
              name="text"
              onBlur={handleBlur}
              onChange={handleChangeText}
              placeholder="edit text"
              required="text"
              type="textarea"
              value={editText}
            />
          </label>

          <label className="label" htmlFor="status">
            {' '}
            Status:
            <Field
              className="select"
              component="select"
              name="status"
              onChange={handleChangeStatus}
              value={editStatus}
            >
              <option value="0">задача не выполнена</option>
              <option value="1">задача не выполнена, отредактирована админом</option>
              <option value="10">задача выполнена</option>
              <option value="11">задача отредактирована админом и выполнена</option>
            </Field>
          </label>
          <Button className="saveButton" onClick={handleClick} type="submit">
            Save
          </Button>
          {/* <button type="submit">Submit</button> */}
        </Form>
      )}
    </Formik>
    // </div>
  );
};

EditAdmin.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  changeSortAll: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  getTaskThunkCreator: PropTypes.func.isRequired,
};

export default EditAdmin;
