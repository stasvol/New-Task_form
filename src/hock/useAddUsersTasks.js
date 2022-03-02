import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export const useAddUsersTasks = (getTaskThunkCreator,currentPage,totalCount) => {
    const [sort,setSort] = useState('')
    const [changeSort,setChangeSort] = useState(true)
    const [changeSortUsername,setChangeSortUsername] =useState(true)
    const [changeSortEmail,setChangeSortEmail] =useState(true)
    const [changeSortStatus,setChangeSortStatus] =useState(true)
    const dispatch = useDispatch()

    let changeSortAll = changeSort && changeSortUsername && changeSortEmail && changeSortStatus

    useEffect(() => {
        getTaskThunkCreator(currentPage,sort,changeSortAll,totalCount)
        // ,changeSort,changeSortUsername,changeSortEmail,changeSortStatus)
    }, [currentPage,sort,changeSortAll,totalCount])

    const handleSubmit =(values,{ resetForm }) => {

        let formData = new FormData();

        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("text", values.text);

        try {
            fetch(`https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name`, {
                method: 'POST',
                mimeType: "multipart/form-data",
                body: formData
            });
            getTaskThunkCreator()
            resetForm();
        } catch (error) {
            console.error('ERROR:', error);
        }
    }

    return {sort,setSort,changeSort,setChangeSort,
        changeSortUsername,setChangeSortUsername,
        changeSortEmail,setChangeSortEmail,
        changeSortStatus,setChangeSortStatus,
        dispatch,handleSubmit}
}