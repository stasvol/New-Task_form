import React from 'react';
// import {useDispatch} from "react-redux";
import { Pagination } from 'antd';

import { usePagination } from '../hook/usePagination';

// eslint-disable-next-line react/prop-types
export const MyPagination = ({ totalCount, currentPage, getCurrentPage }) => {
  const { pageSize, onChange } = usePagination(getCurrentPage);

  return (
    <Pagination
      // chowSizeChanger={true}
      // pageSizeOptions={[1,5,10,20,30,40,50,69]}
      // defaultPageSize={3}
      current={currentPage}
      onChange={onChange}
      pageSize={pageSize}
      total={totalCount}
    />
  );
};
