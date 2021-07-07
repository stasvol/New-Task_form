import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import {QQQ} from "./QQQ";


const AddTask = () => {
const [value, setValue ] = useState(()=>{
    return  {name: '', password: ''}
})
// const [password,setPassword] = useState([])

    const handlerForm =(e)=>{

        e.preventDefault()

     // const name = e.target.value
     // const password =  e.target.name
     //    e.target.name = e.target.value
        setValue({[e.target.name]: e.target.value})

        // setPassword({[e.target.name]: e.target.value})
     // if (password === 123 && value === 'admin' ) {
     //     <Redirect to={'/QQQ'}/>
     // }
        console.log(e.target.name + ''+ e.target.value)
  }

  const handlerInput =()=> {
    debugger
     if (value.value === 'admin' && value.password === 123 ) {
       return  <div>HELLO</div>
         // <Redirect to={'/QQQ'}/>
     }
  }
    return <div>
        {/*{ state.name === 'admin' &&  state.password === 123 ? <Redirect to={'/QQQ'}/> :*/}
            <form >
                <input onChange={handlerForm} type={'text'} name={'name'}  value={value.name}/>
                <input onChange={handlerForm} type={'text'} name={'password'} value={value.password}/>
                <button onClick={handlerInput} >Edit</button>

            </form>
        {/*}*/}
    </div>
    
}

export default AddTask