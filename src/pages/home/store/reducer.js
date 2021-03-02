import { fromJS } from 'immutable'
const defaultState = fromJS(
  {
    acticleList: [
      {
        id: 1,
        title: '心理学家：永远不要为了省钱而穿旧衣服，你知道原因吗？',
        desc: '相信很多人都不舍得扔掉自己的旧衣服，总是觉得还可以再穿一个春秋，尤其是那些经济收入不好的家庭，自然会为了省钱而穿旧衣服，即便已经很多年了也舍不得...',
        imgUrl: 'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016052501.jpg'
      },
      {
        id: 2,
        title: '心理学家：永远不要为了省钱而穿旧衣服，你知道原因吗？',
        desc: '相信很多人都不舍得扔掉自己的旧衣服，总是觉得还可以再穿一个春秋，尤其是那些经济收入不好的家庭，自然会为了省钱而穿旧衣服，即便已经很多年了也舍不得...',
        imgUrl: 'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016052501.jpg'
      },
      {
        id: 3,
        title: '心理学家：永远不要为了省钱而穿旧衣服，你知道原因吗？',
        desc: '相信很多人都不舍得扔掉自己的旧衣服，总是觉得还可以再穿一个春秋，尤其是那些经济收入不好的家庭，自然会为了省钱而穿旧衣服，即便已经很多年了也舍不得...',
        imgUrl: 'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016052501.jpg'
      },
      {
        id: 4,
        title: '心理学家：永远不要为了省钱而穿旧衣服，你知道原因吗？',
        desc: '相信很多人都不舍得扔掉自己的旧衣服，总是觉得还可以再穿一个春秋，尤其是那些经济收入不好的家庭，自然会为了省钱而穿旧衣服，即便已经很多年了也舍不得...',
        imgUrl: 'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016052501.jpg'
      },
    ],
    recommendList: [
      {
        id: 1,
        imgUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1go4r3aypptj20fm02kq2z.jpg"
      },
      {
        id: 2,
        imgUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1go4rokeedrj20fi02g3yi.jpg"
      },
      {
        id: 3,
        imgUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1go4r3aypptj20fm02kq2z.jpg"
      },
      {
        id: 4,
        imgUrl: "https://tva1.sinaimg.cn/large/e6c9d24egy1go4rokeedrj20fi02g3yi.jpg"
      }
    ]
  }
)

//reducer可以接收state，但绝不能修改state
export const reducer = (state = defaultState, action) => {
  return state
}

export default reducer