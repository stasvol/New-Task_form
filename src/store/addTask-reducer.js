import React from "react";

const GET_TASK = 'GET_TASK'
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const IS_AUTH = 'IS_AUTH'
const EDIT_BUTTON = 'EDIT_BUTTON'
const SAVE_BUTTON = 'SAVE_BUTTON'

const initialState = {
    message: [],
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
         }

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
            }

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


export const getTaskThunkCreator = (currentPage,sort,changeSortAll,
    changeSort,changeSortUsername,changeSortEmail,changeSortStatus) =>
    async (dispatch) => {

    const data = await fetch
    (`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}
         &sort_field=${sort}&sort_direction=${changeSortAll ? 'asc' : 'desc'}`)
         // ${changeSort && changeSortUsername && changeSortEmail && changeSortStatus ? 'asc': 'desc'}`)
        .then(response => response.json())
        .then(data => data)

    dispatch(getTask(data.message.tasks));
    dispatch(getTotalCount(data.message.total_task_count))
}

export default taskReducer