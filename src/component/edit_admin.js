import React, {useState} from "react";
import {Button} from "antd";
import { red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@ant-design/colors';
import { generate, presetPalettes } from '@ant-design/colors';
import { Field, Form, Formik, FormikProps } from 'formik';

export const EditAdmin =({text,status,...props})=> {

    // const colors = generate('#1890ff');
    // console.log(colors);
    // console.log(presetPalettes);
    const [isButton, setIsButton] = useState( true)
    const [editStatus, setEditStatus] = useState( status)
    const [editText, setEditText] = useState( text)


    const handleChangeStatus=(e)=>{

        setEditStatus(e.target.value)
    }
    const handleChangeText =(e) => {
        setEditText(e.target.value)
    }
    const handleClickEdit =()=> {
        setIsButton(!isButton)
    }
    console.log(editStatus)
    console.log(editText)
 return (
     <>
         {/*<h2>EDIT TASKS ADMIN</h2>*/}
     {  isButton
         ?
          <Button onClick={handleClickEdit}  type="dashed"  >Edit</Button>
         :
          <Button type={"dashed"} >Save</Button> &&
         <Formik
         initialValues={{  status: status }}
         // onSubmit={(values, actions) => {
         //     setTimeout(() => {
         //         alert(JSON.stringify(values, null, 2));
         //         actions.setSubmitting(false);
         //     }, 1000);
         // }}
         >
     {(props,handleBlur) => (
         <Form>
         <label htmlFor={'status'} className={'label'}> Status:
         <Field component ="select" name="status"  value={editStatus} className={'select' } onChange={handleChangeStatus} >
         <option value="0">задача не выполнена</option>
         <option value="1">задача не выполнена, отредактирована админом</option>
         <option value="10">задача выполнена</option>
         <option value="11">задача отредактирована админом и выполнена</option>
         </Field>
         </label>
             <label htmlFor={'Text'} className={'label'}> Text:
             <Field required={'text'} className={'textarea'}
                    component={'textarea'}
                    type="textarea"
                    onChange={handleChangeText}
                    onBlur={handleBlur}
                    defaultValue={text}
                    name="text"
                    placeholder={'edit text'}
             />
             </label>
     {/*<button type="submit">Submit</button>*/}
         </Form>
         )}
         </Formik>


     }

         {/*<Formik*/}
         {/*    initialValues={{  status: 'задача не выполнена', }}*/}
         {/*    // onSubmit={(values, actions) => {*/}
         {/*    //     setTimeout(() => {*/}
         {/*    //         alert(JSON.stringify(values, null, 2));*/}
         {/*    //         actions.setSubmitting(false);*/}
         {/*    //     }, 1000);*/}
         {/*    // }}*/}
         {/*>*/}
         {/*    {(props) => (*/}
         {/*        <Form>*/}
         {/*            <Field as="select" name="status" className={'select' }>*/}
         {/*                <option value="0">задача не выполнена</option>*/}
         {/*                <option value="1">задача не выполнена, отредактирована админом</option>*/}
         {/*                <option value="10">задача выполнена</option>*/}
         {/*                <option value="11">задача отредактирована админом и выполнена</option>*/}
         {/*            </Field>*/}
         {/*            /!*<button type="submit">Submit</button>*!/*/}
         {/*        </Form>*/}
         {/*    )}*/}
         {/*</Formik>*/}

   </>
 )
}