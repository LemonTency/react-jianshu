import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  float: left;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    height: 50px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
  .desc {
    font-size: 13px;
    color: #999;
    line-height: 24px;
  }
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 45px;
  margin-bottom: 20px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const WriterWrapper = styled.div`
  width: 278px;
  .author{
    font-size: 14px;
    color: #969696;
  }
`

export const WriterItem = styled.div`
  overflow:hidden;
  height: 50px;
  lind-height: 50px;
  margin-top: 15px;
  .pic{
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`

export const WriterInfo = styled.div`
  width: 200px;
  display: block;
  float: right;
  height: 50px;
  line-height: 24px;
  .title {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: inline-block;
  }
  .desc {
    font-size: 12px;
    color: #999;
    line-height: 24px;
  }
  .follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
`


