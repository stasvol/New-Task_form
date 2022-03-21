import React from 'react';
// import {useHistory} from 'react-router-dom'
// import {useDispatch} from "react-redux";
//
// import {getIsAuth} from "../store/addTask-reducer";
import { useEntranceAdmin } from '../hook/useEntranceAdmin';

const EntranceAdmin = () => {
  const { name, password, handlerForm, handlerInput } = useEntranceAdmin();
  // const isAuth = useSelector(state=> state.task.isAuth)
  //     const [isAuth, setIsAuth] = useState( false)
  //     const [state, setState] = useState(() => ({name: '', password: null}));
  //     const {name, password} = state
  //     const dispatch = useDispatch()
  //     const history = useHistory()
  //
  // // const [password,setPassword] = useState([])
  // //     const [active,setActive] =useState(true)
  //     const handlerForm = (e) => {
  //         e.preventDefault()
  //         // const name = e.target.value
  //         // const password =  e.target.name
  //         //    e.target.name = e.target.value
  //         setState(prevState => ({...prevState,
  //         [e.target.name]: e.target.value}))
  //         // setPassword({[e.target.name]: e.target.value})
  //         // if (password === 123 && value === 'admin' ) {
  //         //     <Redirect to={'/QQQ'}/>
  //         // }
  //     }
  //
  //     const handlerInput = () => {
  //         try {
  //             (name === 'admin' && +password === 123) &&
  //             history.push('/Header')
  //             dispatch(getIsAuth(true))
  //             // <Redirect to={'/QQQ'}/>
  //             // setActive(!active)
  //
  //         } catch (error) {
  //             throw new Error(`ERROR:`, error)
  //
  //         }
  //         // if (name === 'admin' && +password === 123  ) {
  //         //     history.push('/Header')
  //         //
  //         //     dispatch(getIsAuth(true))
  //         //     // <Redirect to={'/QQQ'}/>
  //         //     // setActive(!active)
  //         //
  //         // } else {
  //         //     alert("Error")
  //         // }
  //
  //     }
  // console.log(isAuth)
  return (
    <>
      <h1>Login Administrator</h1>
      {/* { state.name === 'admin' &&  state.password === 123 ?
      <Redirect to={'/QQQ'}/> : */}
      <form>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={handlerForm}
          placeholder="admin"
          required
          type="text"
          value={name}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          onChange={handlerForm}
          placeholder="123"
          required="password"
          type="password"
          value={password}
        />
        <label htmlFor="email"> </label>
        <button onClick={handlerInput}>Login</button>
      </form>
      {/* } */}
    </>
  );
};

export default EntranceAdmin;
