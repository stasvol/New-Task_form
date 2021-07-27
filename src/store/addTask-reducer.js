
const GET_TASK = 'GET_TASK'
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const IS_AUTH = 'IS_AUTH'
const EDIT_BUTTON = 'EDIT_BUTTON'
const SAVE_BUTTON = 'SAVE_BUTTON'


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
    // users: [
    //     {
    //         // id: null,
    //         username: '',
    //         email: '',
    //         text: '',
    //
    //     }
    // ],
    currentPage: 1,
    totalCount: 0,
    isAuth:false,
    editMode: false

}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_TASK:

            return {
                ...state,
                message:action.payload,
                //  ...action.payload.message.tasks.map((task,i) => {
                //      if ( task.id === action.payload.message.tasks[i].id) {
                //         return {...task, editMode:true };
                //     }
                //     return task
                // }),

                // message: state.message.task.map((task, isAuth) => {
                //     if (isAuth===true && task.id === action.id) {
                //         return {...task};
                //     }
                //     return task
                // })
         }

        // case ADD_USER_TASK:
        //
        //     return {
        //         ...state,
        //         users: action.payload
        //     }

        case GET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.payload
            }

        case TOTAL_COUNT :
            return {
                ...state,
                totalCount: action.payload
            }
        case IS_AUTH :

            return {
                ...state,
                isAuth: action.payload,
                //  message: state.message.tasks.map((task, i) => {
                //     if ( task.id === i) {
                //         return {...task };
                //     }
                //     return task
                // }),

            }
        // case EDIT_MODE :
        //
        //     return {
        //         ...state,
        //         editMode: action.payload,
        //         //  message: state.message.tasks.map((task, i) => {
        //         //     if ( task.id === i) {
        //         //         return {...task };
        //         //     }
        //         //     return task
        //         // }),
        //
        //     }
        case EDIT_BUTTON :

            return {

                ...state,
                message:state.message.map((task, i) => {

                    if ( i === action.payload ) {

                        return {...task,  editMode:true}
                    }
                    return task
                }),

            }

        case SAVE_BUTTON :

            return {

                ...state,
                message:state.message.map((task, i) => {

                    if ( i === action.payload ) {

                        return {...task,  editMode:false}
                    }
                    return task
                }),

            }


        default:
            return state
    }
}
export const getTask = (message) => ({type: GET_TASK, payload:message });
// export const addUserTask = (users) => ({type: ADD_USER_TASK, payload: users})
export const getCurrentPage = (currentPage) => ({type: GET_CURRENT_PAGE, payload: currentPage})
export const getTotalCount = (totalCount) => ({type: TOTAL_COUNT, payload: totalCount})
export const getIsAuth = (isAuth) => ({type: IS_AUTH, payload: isAuth})
// export const getEditMode = (editMode) => ({type: EDIT_MODE, payload: editMode})
export const editButton = (i) => ({type: EDIT_BUTTON,payload:i})
export const saveButton = (i) => ({type: SAVE_BUTTON,payload:i})


export const getTaskThunkCreator = (currentPage,sort,changeSortAll,changeSort,changeSortUsername,changeSortEmail,changeSortStatus) =>
    async (dispatch) => {

    const data = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}
         &sort_field=${sort}&sort_direction=${changeSortAll ? 'asc' : 'desc'}`)
         // ${changeSort && changeSortUsername && changeSortEmail && changeSortStatus ? 'asc': 'desc'}`)
        .then(response => response.json())
        .then(data => data)
    // .then(data => {         // return - промисы - для app_reducer

    dispatch(getTask(data.message.tasks));
    dispatch(getTotalCount(data.message.total_task_count))
    // console.log(props.currentPage)
}

// export const addTaskThunk = () => async (dispatch) => {
//     //   let payload ={
//     //        username: users.username,
//     //           email: users.email,
//     //           text: users.text
//     //   }
//     // let formData = new FormData()
//     //   formData.append('json', JSON.stringify(payload))
//     //   fetch('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name',
//     //       {
//     //           method: 'POST',
//     //           body:formData
//     //       })
//     //       .then(function (res){ return res.json()})
//     //       .then(function (formData){dispatch(addUserTask(formData))})
//     //       .then(function (formData){ alert(JSON.stringify(formData))})
//     let formData = new FormData();
//     // for(const name in users) {
//     //     formData.append(name, users[name]);
//     // }
//     // for(const email in users) {
//     //     formData.append(email, users[email]);
//     // }
//     // for(const text in users) {
//     //     formData.append(text, users[text]);
//     // }
//
//     // formData.append("id", users.id);
//     // formData.append("username", users.username);
//     // formData.append("email", users.email);
//     // formData.append("text", users.text);
//
//     try {
//         const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name`, {
//             // credentials: 'same-origin',
//             method: 'POST',
//             mimeType: "multipart/form-data",
//             body: formData
//         });
//         const users = await response.json();
//         getTaskThunkCreator()
//         // dispatch(addUserTask(users));
//
//
//
//
//     } catch (error) {
//         console.error('ERROR:', error);
//     }

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
// }

export default taskReducer