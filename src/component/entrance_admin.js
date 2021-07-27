import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {getIsAuth} from "../store/addTask-reducer";



const EntranceAdmin = (props) => {
// const isAuth = useSelector(state=> state.task.isAuth)
//     const [isAuth, setIsAuth] = useState( false)
const [state, setState ] = useState(()=>{
    return  {name: '', password: null}
})
const dispatch = useDispatch()
const history = useHistory()

// const [password,setPassword] = useState([])
//     const [active,setActive] =useState(true)
    const handlerForm =(e)=>{

        e.preventDefault()

     // const name = e.target.value
     // const password =  e.target.name
     //    e.target.name = e.target.value
        setState(prevState=>({...prevState,[e.target.name]: e.target.value}))

        // setPassword({[e.target.name]: e.target.value})
     // if (password === 123 && value === 'admin' ) {
     //     <Redirect to={'/QQQ'}/>
     // }

  }

  const handlerInput =()=> {

     if (state.name === 'admin' && +state.password === 123  ) {
         history.push('/Header')

         dispatch(getIsAuth(true))
         // <Redirect to={'/QQQ'}/>
         // setActive(!active)

     } else {
         alert("Error")
     }

  }
    // console.log(isAuth)
    return <div>
          <h1>Login Administrator</h1>
        {/*{ state.name === 'admin' &&  state.password === 123 ? <Redirect to={'/QQQ'}/> :*/}
            <form  >
                <label htmlFor={'name'}>Name</label>
                <input onChange={handlerForm} type={'text'} name={'name'}  value={state.name} placeholder={'admin'} required />
                <label htmlFor={'email'}>Password</label>
                <input onChange={handlerForm} type={'password'} name={'password'} value={state.password} placeholder={'123'} required={'password'} />
                <label htmlFor={'email'}> </label>
                <button onClick={handlerInput} >Login</button>

            </form>
        {/*}*/}
    </div>
    
}

export default EntranceAdmin