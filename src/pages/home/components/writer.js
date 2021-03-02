import React, { Component } from 'react'
import { WriterWrapper, WriterItem, WriterInfo } from '../style'

class Writer extends Component {
  render() {
    return (
      <div>
        <WriterWrapper>
          <div className="author">推荐作者</div>
          <WriterItem>
            <img className="pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
            <WriterInfo>
              <h3 className="title">董克平日记</h3><span className="follow">+关注</span>
              <p className="desc">写了1268.1k字 · 5.8k喜欢</p>
            </WriterInfo>
          </WriterItem>
          <WriterItem>
            <img className="pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
            <WriterInfo>
              <h3 className="title">董克平日记</h3><span className="follow">+关注</span>
              <p className="desc">写了1268.1k字 · 5.8k喜欢</p>
            </WriterInfo>
          </WriterItem>
          <WriterItem>
            <img className="pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
            <WriterInfo>
              <h3 className="title">董克平日记</h3><span className="follow">+关注</span>
              <p className="desc">写了1268.1k字 · 5.8k喜欢</p>
            </WriterInfo>
          </WriterItem>
          <WriterItem>
            <img className="pic" src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
            <WriterInfo>
              <h3 className="title">董克平日记</h3><span className="follow">+关注</span>
              <p className="desc">写了1268.1k字 · 5.8k喜欢</p>
            </WriterInfo>
          </WriterItem>
        </WriterWrapper>
      </div>
    )
  }
}

export default Writer