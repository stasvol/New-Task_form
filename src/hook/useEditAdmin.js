import { useState } from 'react';
import { useDispatch } from 'react-redux';
import md5 from 'md5';
import $ from 'jquery';

import { saveButton } from '../store/addTask-reducer';

export const useEditAdmin = (
  getTaskThunkCreator,
  currentPage,
  totalCount,
  text,
  status,
  sort,
  changeSortAll,
  id,
  index,
) => {
  const [editStatus, setEditStatus] = useState(status);
  const [editText, setEditText] = useState(text);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(saveButton(id));

    const token = encodeURIComponent('beejee');
    const text = encodeURIComponent(editText);
    const status = encodeURIComponent(editStatus);
    const paramsString = `status=${status}&text=${text}&token=${token}`;
    const signature = md5(paramsString);
    const paramsData = `${paramsString}&signature=${signature}`;

    $.ajax({
      url: `https://uxcandy.com/~shapoval/test-task-backend/edit/${index}?developer=Name`,
      crossDomain: true,
      method: 'POST',
      mimeType: 'multipart/form-data',
      // contentType: false,
      // processData: false,
      data: paramsData,
      dataType: 'json',
      success(data) {
        console.log(data);
        getTaskThunkCreator(currentPage, sort, changeSortAll, totalCount);
      },
    });
  };

  const handleChangeStatus = e => {
    setEditStatus(e.target.value);
  };

  const handleChangeText = e => {
    setEditText(e.target.value);
  };

  return {
    editStatus,
    setEditStatus,
    editText,
    setEditText,
    handleChangeText,
    handleChangeStatus,
    handleClick,
  };
};
