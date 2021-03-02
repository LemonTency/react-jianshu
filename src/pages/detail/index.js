import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>需求管理规范</Header>
        <Content>
          <img src="https://tva1.sinaimg.cn/large/e6c9d24egy1go5b0u5viwj210q0sugp8.jpg"></img>
          <p>MOMO云敏捷项目管理，融合了敏捷、DevOps思想，打通了整个从需求、研发、测试、运维、运营的端到端敏捷。在实践中通过运维自动化，将Scrum敏捷团队开发的产品快速上线，并通过及时的运营，反馈给敏捷团队进行方向调整。</p>
          <p>需求收集主要通过以下几个渠道：头脑风暴、用户调研、用户反馈、竞品分析和数据分析。当然还有老板需求、运营需求、增长需求…等。</p>
          <p>邀请团队中的产品、运营、视觉、技术等不同角色人员参加。人数不不宜过多。围绕着一个核心问题，自由发挥发表观点，不评论对错。另外就是一定指定人员来做好会议记录方便会后复盘。</p>
          <p>用户调研一般采用问卷调查、用户访谈、可用性测试三种方式进行。问卷和用户访谈都需要有针对性的设计问卷和寻找优质用户，而可行性测试需要对特定功能寻找特定人群进行测试和收集反馈。</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail