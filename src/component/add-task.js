import React, {useState} from 'react'
import {Redirect} from "react-router-dom";


const AddTask = () => {
// const [name, setName ] = useState([])

    const handlerForm =(e)=>{

        e.preventDefault()
     const value = e.target.value
     const password  =  e.target.name

     if (password === 123 && value === 'admin' ) {
         <Redirect to={'/QQQ'}/>
     }
        console.log(value + ''+ password)
  }
    return <div>
        <form >
            <input onChange={handlerForm} type={'text'} name={'admin'} autoComplete={'admin'}   />
            <input onChange={handlerForm} type={'password'} name={'password'}  />
            <button >Edit</button>

        </form>
    </div>
    
}

export default AddTask