import React, { Component } from 'react';
import { Pagination } from 'antd';


export default class LevelIndicator extends Component {
  handleChange = (page, pageSize) => {
    this.props.changePage(page);
  }

  render() {
    return (
      <Pagination simple current={this.props.level} total={this.props.totalLevels * 10} onChange={this.handleChange} />
    );
  }
}
