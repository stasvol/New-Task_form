import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import {useHistory,useLocation} from 'react-router-dom'


const AdminEdit = () => {

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
        console.log(e.target.name + '' + e.target.value)
  }

  const handlerInput =()=> {
      debugger
     if (state.name === 'admin' && +state.password === 123 ) {
         history.push('/QQQ')
         // <Redirect to={'/QQQ'}/>

     }

  }
    return <div>
        {/*{ state.name === 'admin' &&  state.password === 123 ? <Redirect to={'/QQQ'}/> :*/}
            <form >
                <input onChange={handlerForm} type={'text'} name={'name'}  value={state.name}/>
                <input onChange={handlerForm} type={'text'} name={'password'} value={state.password}/>
                <button onClick={handlerInput} >Edit</button>

            </form>
        {/*}*/}
    </div>
    
}

export default AdminEdit