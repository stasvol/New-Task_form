const ADD_TASK = 'ADD_TASK'

const initialState ={
    email: '',
    id: null,
    status: null,
    text: '',
    name: ''
    // image_path: "https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/1107fb5b/1524207101_avatarDoter.jpg"
}

const addTaskReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TASK:

            return {
                ...state,
                payload: action.payload


            }


        default:
            return state
    }
}
export const addTask =(id,status,email, name,text) => ({type: ADD_TASK, payload:{id,status,email, name,text}});


export const addTaskThunkCreator = (id,status,email, name,text) => async (dispatch) => {
    debugger
    const data = await fetch('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name')
        .then(response=>response.json() )
        .then(data=> data)
    // .then(data => {         // return - промисы - для app_reducer

        dispatch(addTask(data));

}

export default addTaskReducer