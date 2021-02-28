import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      focued: false
    })
    this.onHandleFocus = this.onHandleFocus.bind(this)
    this.onHandleBlur = this.onHandleBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focued}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.state.focued ? 'focued' : ''} onFocus={this.onHandleFocus} onBlur={this.onHandleBlur}></NavSearch>
            </CSSTransition>
            <i className={this.state.focued ? 'focued iconfont' : 'iconfont'}>&#xe63d;</i>
          </SearchWrapper>
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="writting"><i className='iconfont'>&#xe708;</i>写文章</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
  onHandleFocus() {
    this.setState({
      focued: true
    })
  }
  onHandleBlur() {
    this.setState({
      focued: false
    })
  }
}

export default Header