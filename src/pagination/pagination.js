import React from "react";
import { Pagination } from 'antd';

export class MyPagination extends React.Component {
    state = {
        current:this.page,
    };

    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };

    render() {
        return <Pagination current={this.state.current} onChange={this.onChange} total={500} />;
    }
}