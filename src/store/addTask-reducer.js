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
            id: null,
            name: '',
            email: '',
            task: ''
        }
    ]
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_TASK:

            return {
                ...state,
                ...action.payload
            }

        case ADD_USER_TASK:

            return {
                ...state,
                users:[...action.payload]
            }

        default:
            return state
    }
}
export const getTask = (message) => ({type: GET_TASK, payload: message});
export const addUserTask = (id, name, email, task) => ({type: ADD_USER_TASK, payload: {id, name, email, task}})

export const getTaskThunkCreator = () => async (dispatch) => {

    const data = await fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name')
        .then(response => response.json())
        .then(data => data)
    // .then(data => {         // return - промисы - для app_reducer
    console.log('THUNK ', data)
    dispatch(getTask(data));
}

export const  addTaskThunk = (id, name, email, task) => async (dispatch) => {

    const url = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Name'
    const data = { id, name, email, task }

   try {
       const response = await fetch(url,{
           method: 'POST',
           body: JSON.stringify(data),
           headers:{
               'Content-Type':'application/json'
           }
       })
       const users = await response.json()
       console.log('THUNK ', users)
       dispatch(addUserTask(users));
   } catch (error){
        console.error('ERROR ',error)
   }

}

export default taskReducer