import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from '../store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../store/actionTypes'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange(event) {
    const action = {
      //事件名称
      type: CHANGE_INPUT_VALUE,
      value: event.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM,
    }
    store.dispatch(action)
  }
  handleDeleteItem(index) {
    const action = {
      //事件名称
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Input placeholder="todo info" value={this.state.inputValue} style={{ marginRight: '20px', width: '300px' }} onChange={this.handleInputChange} />
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        <List
          style={{ width: '500px', margin: 'auto' }}
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleDeleteItem.bind(this, index)}>
              <List.Item.Meta
                description={item}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoList