import React, { Component } from 'react'
import { RecommendItem, RecommendWrapper } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {

  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map((item) => <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>)}
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)