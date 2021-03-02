import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store'
import { actionCreator as loginActionCreator } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

class Header extends Component {
  render() {
    const { focued, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ? <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focued}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={focued ? 'focued' : ''} onFocus={this.props.onHandleFocus} onBlur={this.props.onHandleBlur}></NavSearch>
            </CSSTransition>
            <i className={focued ? 'focued iconfont' : 'iconfont'}>&#xe63d;</i>
          </SearchWrapper>
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="writting"><i className='iconfont'>&#xe708;</i>写文章</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focued: state.getIn(['header', 'focued']),
    login: state.getIn(['login', 'login'])
    // state.get('header').get('focued')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleFocus() {
      dispatch(actionCreator.searchFocusCreator())
    },
    onHandleBlur() {
      dispatch(actionCreator.searchBlurCreator())
    },
    logout() {
      dispatch(loginActionCreator.logout())
    }
  }
}
//connect和header建立链接
export default connect(mapStateToProps, mapDispatchToProps)(Header)