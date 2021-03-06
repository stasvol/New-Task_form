import React from "react";
import {Pagination} from 'antd';
import {useDispatch} from "react-redux";


export const MyPagination = ({totalCount,currentPage,getCurrentPage}) => {

    const pageSize = 3;
    const dispatch = useDispatch()

    const onChange = page => {

        dispatch(getCurrentPage(page))

    };


    return <Pagination
        // chowSizeChanger={true}
        // pageSizeOptions={[1,5,10,20,30,40,50,69]}
        // defaultPageSize={3}
        current={currentPage}
        pageSize={pageSize}
        total={totalCount}
        onChange={onChange}
        // total={500}
    />;

}
