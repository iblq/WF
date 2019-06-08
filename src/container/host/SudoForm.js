import React, { Component } from 'react'
import { Modal, Input } from 'antd'

export default class SudoForm extends Component {
  state = {
    sudo_pswd: ''
  };

  onChange = e => {
    this.setState({ sudo_pswd: e.target.value })
  };

  onEnter = () => {
    this.props.saveData(this.state.sudo_pswd)
  };

  render() {
    return (
      <Modal
        title="请输入管理员密码"
        visible={true}
        width={300}
        onOk={() => {
          this.props.saveData(this.state.sudo_pswd)
        }}
        onCancel={this.props.onCancel}
      >
        <Input
          type="password"
          style={{ width: '100%' }}
          onPressEnter={this.onEnter}
          onChange={this.onChange}
        />
      </Modal>
    )
  }
}