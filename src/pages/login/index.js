import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="请输入账号" ref={(input) => { this.account = input }}></Input>
            <Input placeholder="请输入密码" type="password" ref={(input) => { this.password = input }}></Input>
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/"></Redirect>
    }

  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreator.login(accountEle.value, passwordEle.value))
  }
})

export default connect(mapState, mapDispatch)(Login)