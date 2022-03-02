import {useDispatch} from "react-redux";

export const usePagination = (getCurrentPage) => {

    const pageSize = 3;
    const dispatch = useDispatch()

    const onChange = page => {
        dispatch(getCurrentPage(page))
    }

    return { pageSize,onChange }
}