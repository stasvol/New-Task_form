import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import {useHistory,useLocation} from 'react-router-dom'


const EntranceAdmin = () => {

const [state, setState ] = useState(()=>{
    return  {name: '', password: ''}
})

const history = useHistory()
let location = useLocation()
// const [password,setPassword] = useState([])

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

     if (state.name === 'admin' && +state.password === 123 ) {
         history.push('/Edit')
         // <Redirect to={'/QQQ'}/>

     }

  }
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