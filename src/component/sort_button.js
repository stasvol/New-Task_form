import React from "react";
import ButtonGroup from "antd/es/button/button-group";
import {Button} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";


export const SortButton = ({message,setChangeSort,
                               changeSort,setChangeSortUsername, changeSortUsername,
                               changeSortEmail,setChangeSortEmail,changeSortStatus,setChangeSortStatus,...props}) => {


    // const [changeSortUsername,setChangeSortUsername] =useState(true)
    // const [changeSortEmail,setChangeSortEmail] =useState(true)
    // const [changeSortStatus,setChangeSortStatus] =useState(true)
    //
    // const changeSorts = props.changeSort | changeSortUsername | changeSortEmail | changeSortStatus

    const handleClickId = () => {

        props.setSort('id')
        setChangeSort(!changeSort)
        // setSortUsername(sortUsername)
        // setSortEmail(sortEmail)
        // setSortStatus(sortStatus)

    }
    const handleClickUsername = () => {

        props.setSort('username')
        setChangeSortUsername(!changeSortUsername)

    }

    const handleClickEmail = () => {

        props.setSort('email')
        setChangeSortEmail(!changeSortEmail)

    }

    const handleClickStatus = () => {

        props.setSort('status')
        setChangeSortStatus(!changeSortStatus)


    }


    return  <ButtonGroup>
        {/*{props.changeSort ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}*/}
            <Button  onClick={handleClickId} >{changeSort ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort ID</Button>
            <Button  onClick={handleClickUsername}>{changeSortUsername ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort Username</Button>
            <Button  onClick={handleClickEmail}>{changeSortEmail ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort Email</Button>
            <Button  onClick={handleClickStatus}>{changeSortStatus ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}Sort Status</Button>


         </ButtonGroup>

}