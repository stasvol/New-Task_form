import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {Formik, Field} from 'formik';
import { Button } from 'antd';

import { MyPagination } from '../pagination/pagination';
import {
  editButton,
  getCurrentPage,
  getIsAuth,
  getTaskThunkCreator,
  getTotalCount,
  saveButton,
} from '../store/addTask-reducer';
import SortButton from './sort_button';
import EditAdmin from './edit_admin';
import { useAddUsersTasks } from '../hook/useAddUsersTasks';
import FormUserTask from './form_user_task';

const AddUsersTasks = ({
  getTaskThunkCreator,
  changeSortAll,
  currentPage,
  totalCount,
  message,
  isAuth,
  getIsAuth,
  getCurrentPage,
}) => {
  const {
    sort,
    setSort,
    changeSort,
    setChangeSort,
    changeSortUsername,
    setChangeSortUsername,
    changeSortEmail,
    setChangeSortEmail,
    changeSortStatus,
    setChangeSortStatus,
    dispatch,
    handleSubmit,
  } = useAddUsersTasks(getTaskThunkCreator, currentPage, totalCount);

  return (
    <div>
      <h2>ADD TASKS</h2>
      <FormUserTask handleSubmit={handleSubmit} />

      <h2>LIST TASKS</h2>
      <SortButton
        changeSort={changeSort}
        changeSortEmail={changeSortEmail}
        changeSortStatus={changeSortStatus}
        changeSortUsername={changeSortUsername}
        message={message}
        setChangeSort={setChangeSort}
        setChangeSortEmail={setChangeSortEmail}
        setChangeSortStatus={setChangeSortStatus}
        setChangeSortUsername={setChangeSortUsername}
        setSort={setSort}
        sort={sort}
      />

      {/* eslint-disable-next-line react/prop-types */}
      {message?.length &&
        // eslint-disable-next-line react/prop-types
        message.map(({ id, username, email, text, status }, i) => {
          const handleClick = () => dispatch(editButton(i));
          return (
            <div key={id} className="task">
              {!isAuth ? (
                <div>
                  <div>
                    <b>Name: </b>
                    {username}{' '}
                  </div>
                  <div>
                    <b>Email: </b>
                    {email}{' '}
                  </div>
                  <div>
                    <b>Text: </b>
                    {text}{' '}
                  </div>
                  <div>
                    <b>Status:</b>
                    {status}{' '}
                  </div>
                </div>
              ) : (
                <>
                  {/* eslint-disable-next-line react/prop-types */}
                  {!message[i].editMode ? (
                    <div id={i}>
                      <div>
                        <b> Name: </b> {username}{' '}
                      </div>
                      <div>
                        <b> Email: </b> {email}{' '}
                      </div>
                      <div>
                        <b> Text: </b> {text}{' '}
                      </div>
                      <div>
                        <b> Status:</b> {status}{' '}
                      </div>
                      <Button onClick={handleClick} type="primary">
                        Edit
                      </Button>
                    </div>
                  ) : (
                    <EditAdmin
                      changeSortAll={changeSortAll}
                      currentPage={currentPage}
                      email={email}
                      getIsAuth={getIsAuth}
                      getTaskThunkCreator={getTaskThunkCreator}
                      id={i}
                      index={id}
                      message={message}
                      sort={sort}
                      status={status}
                      text={text}
                      totalCount={totalCount}
                      username={username}
                    />
                  )}
                </>
              )}
            </div>
          );
        })}
      <MyPagination
        currentPage={currentPage}
        getCurrentPage={getCurrentPage}
        totalCount={totalCount}
      />
    </div>
  );
};

const mapStateToProps = ({
  task: { message, currentPage, totalCount, isAuth, editMode },
}) => {
  // const {message,currentPage,totalCount,isAuth,editMode} = state.task
  return {
    // state: state.task,
    message,
    // users: state.task.users,
    currentPage,
    totalCount,
    isAuth,
    editMode,
  };
};
AddUsersTasks.propTypes = {
  getTaskThunkCreator: PropTypes.func.isRequired,
  changeSortAll: PropTypes.bool,
  currentPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  message: PropTypes.array.isRequired,
  isAuth: PropTypes.bool.isRequired,
  getIsAuth: PropTypes.func.isRequired,
  getCurrentPage: PropTypes.func.isRequired,
};
AddUsersTasks.defaultProps = {
  changeSortAll: true,
};

export default connect(mapStateToProps, {
  getTaskThunkCreator,
  getCurrentPage,
  getTotalCount,
  getIsAuth,
  editButton,
  saveButton,
})(AddUsersTasks);
