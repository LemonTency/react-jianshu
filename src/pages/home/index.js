import React, { Component } from 'react'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List>
          </List>
        </HomeLeft>
        <HomeRight>
          <Recommend>
            推荐
          </Recommend>
          <Writer>
            作者
          </Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home