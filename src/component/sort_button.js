import React from "react";
import ButtonGroup from "antd/es/button/button-group";
import {Button} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";

const SortButton = ({
                        message, setChangeSort, setSort,
                        changeSort, setChangeSortUsername, changeSortUsername,
                        changeSortEmail, setChangeSortEmail, changeSortStatus, setChangeSortStatus}) => {

    const handleClickId = () => {
        setSort('id')
        setChangeSort(!changeSort)
    }

    const handleClickUsername = () => {
        setSort('username')
        setChangeSortUsername(!changeSortUsername)

    }

    const handleClickEmail = () => {
        setSort('email')
        setChangeSortEmail(!changeSortEmail)
    }

    const handleClickStatus = () => {
        setSort('status')
        setChangeSortStatus(!changeSortStatus)
    }

    return <ButtonGroup>
        {/*{props.changeSort ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}*/}
        <Button onClick={handleClickId}>{changeSort ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort ID</Button>
        <Button onClick={handleClickUsername}>{changeSortUsername ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort
            Username</Button>
        <Button onClick={handleClickEmail}>{changeSortEmail ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort
            Email</Button>
        <Button onClick={handleClickStatus}>{changeSortStatus ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort
            Status</Button>
    </ButtonGroup>
}
export default SortButton