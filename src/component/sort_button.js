import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
// import { witchSortButton } from "../hook/useSortButton ";

const SortButton = ({
  setChangeSort,
  setSort,
  changeSort,
  setChangeSortUsername,
  changeSortUsername,
  changeSortEmail,
  setChangeSortEmail,
  changeSortStatus,
  setChangeSortStatus,
}) => {
  const handleClickId = () => {
    setSort('id');
    setChangeSort(!changeSort);
  };

  const handleClickUsername = () => {
    setSort('username');
    setChangeSortUsername(!changeSortUsername);
  };

  const handleClickEmail = () => {
    setSort('email');
    setChangeSortEmail(!changeSortEmail);
  };

  const handleClickStatus = () => {
    setSort('status');
    setChangeSortStatus(!changeSortStatus);
  };

  return (
    <ButtonGroup>
      {/* {props.changeSort ? <ArrowUpOutlined/> : <ArrowDownOutlined/>} */}
      <Button onClick={handleClickId}>
        {changeSort ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        Sort ID
      </Button>
      <Button onClick={handleClickUsername}>
        {changeSortUsername ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        Sort Username
      </Button>
      <Button onClick={handleClickEmail}>
        {changeSortEmail ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        Sort Email
      </Button>
      <Button onClick={handleClickStatus}>
        {changeSortStatus ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        Sort Status
      </Button>
    </ButtonGroup>
  );
};

SortButton.propTypes = {
  setChangeSort: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  changeSort: PropTypes.bool.isRequired,
  setChangeSortUsername: PropTypes.func.isRequired,
  changeSortUsername: PropTypes.bool.isRequired,
  changeSortEmail: PropTypes.bool.isRequired,
  setChangeSortEmail: PropTypes.func.isRequired,
  changeSortStatus: PropTypes.bool.isRequired,
  setChangeSortStatus: PropTypes.func.isRequired,
};
export default SortButton;
