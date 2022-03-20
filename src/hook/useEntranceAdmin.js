import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIsAuth } from '../store/addTask-reducer';

export const useEntranceAdmin = (initialState = () => ({ name: '', password: null })) => {
  const [state, setState] = useState(initialState);
  const { name, password } = state;
  const dispatch = useDispatch();
  const history = useHistory();

  const handlerForm = e => {
    e.preventDefault();
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handlerInput = () => {
    try {
      name === 'admin' && +password === 123 && history.push('/Header');
      dispatch(getIsAuth(true));
    } catch (error) {
      throw new Error(`ERROR:`, error);
    }
  };
  return { name, password, handlerForm, handlerInput };
};
