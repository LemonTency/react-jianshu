import styled from 'styled-components'
import logo from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position:relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  position:absolute;
  top:0;
  left:0;
  height:56px;
  width:100px;
  display:block;
  background:url(${logo});
  background-size:contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #666;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-left: 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
  font-size: 17px;
  color: #333;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 20px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 15px;
  &.reg{
    color: #ea6f5a;
  }
  &.writting{
    color: #fff;
    background-color: #ea6f5a
  }
`

