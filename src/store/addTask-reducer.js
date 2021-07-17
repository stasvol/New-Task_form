import thunk from "redux-thunk";

const GET_TASK = 'GET_TASK'
const ADD_USER_TASK = 'ADD_USER_TASK'

const initialState = {
    message: [
        // {
        //     name: '',
        //     email: '',
        //     id: null,
        //     status: null,
        //     text: '',
        //
        //     // image_path: "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/1107fb5b/1524207101_avatarDoter.jpg"
        // }
    ],
    users: [
        {
            // id: null,
            username: '',
            email: '',
            text: '',

        }
    ],
    currentPage:1
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_TASK:
         debugger
            return {
                ...state,
               ...action.payload
            }

        case ADD_USER_TASK:
            debugger
            return {
                ...state,
                users:{...action.payload}
            }

        default:
            return state
    }
}
export const getTask = (message,currentPage) => ({type: GET_TASK, payload: message,currentPage});
export const addUserTask = (users) => ({type: ADD_USER_TASK, payload: users })

export const getTaskThunkCreator = (currentPage) => async (dispatch) => {

    const data = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}`)
        .then(response => response.json())
        .then(data => data)
    // .then(data => {         // return - промисы - для app_reducer
    console.log('THUNK ', data)
    dispatch(getTask(data));

}

export const  addTaskThunk = (users) => async (dispatch) => {
    debugger
  //   let payload ={
  //        username: users.username,
  //           email: users.email,
  //           text: users.text
  //   }
  // let formData = new FormData()
  //   formData.append('json', JSON.stringify(payload))
  //   fetch('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name',
  //       {
  //           method: 'POST',
  //           body:formData
  //       })
  //       .then(function (res){ return res.json()})
  //       .then(function (formData){dispatch(addUserTask(formData))})
  //       .then(function (formData){ alert(JSON.stringify(formData))})

    let formData = new FormData();
    // for(const name in users) {
    //     formData.append(name, users[name]);
    // }
    // for(const email in users) {
    //     formData.append(email, users[email]);
    // }
    // for(const text in users) {
    //     formData.append(text, users[text]);
    // }

    // formData.append("id", users.id);
    formData.append("username", users.username);
    formData.append("email", users.email);
    formData.append("text", users.text);

    try {
        const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name', {
            // credentials: 'same-origin',
            method: 'POST',
            mimeType: "multipart/form-data",
            body: formData
        });
        const users = await response.json();
        dispatch(addUserTask(users));
        console.log('THUNK_USER ', users)


    } catch (error) {
        console.error('ERROR:', error);
    }

//     const url = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Name'
//     const data = { users }
//
//    try {
//        const response = await fetch(url,{
//            // credentials:'same-origin',
//            method: 'POST',
//            body: JSON.stringify(data),
//            headers:{
//                'Content-Type':'application/json'
//            }
//        })
//        const users = await response.json()
//
//        console.log('THUNK_USER ', users)
//        dispatch(addUserTask(users));
//
//    } catch (error){
//         console.error('ERROR ',error)
//    }
}

export default taskReducer