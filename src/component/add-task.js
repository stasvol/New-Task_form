import React from 'react'


const AddTask = () => {
    // const name = 'admin'
    // const password = 123

  const handlerForm =(name,password)=>{
      if ( name=== 'admin' && password === 123){

      }
  }
    return <div>
        <form action={'/ASD'}>
            <input name={'name'} autocomplete={'admin'}  />
            <input type={'password'} autocomplete={123} />
            <button onClick={handlerForm}>Edit</button>

        </form>
    </div>
    
}

export default AddTask