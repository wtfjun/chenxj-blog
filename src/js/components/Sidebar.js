import React from 'react'
import { Link } from 'react-router'
import Sort from '../containers/sort.js'

export default class Sidebar extends React.Component {

  constructor() {
    super()
  }

  render() {
    const { articles, changeArticle, delArticleById, sort } = this.props
    return (
      <div id="sidebar">
        <h1><a href="">极简风格个人博客</a></h1>
        <p>
          作者：<a href="" className="blue-font">陈小俊</a>
        </p>
        <p>微信：<a href="" className="blue-font">c13266836563</a></p>
        <p>操作：
          <Link to="/login" className="blue-font" style={{marginRight: 5}}>管理员登陆</Link>
          {sessionStorage.getItem('__token__') && (sessionStorage.getItem('__username__') === 'admin') &&
            <Link to="/write/new" className="blue-font">写文章</Link>
          }
        </p>
        
        <Sort sort={sort} />

        <b style={{lineHeight: '40px'}}>目录：</b>

        {articles[0] && articles[0].sort && articles[0].sort === 'visitor' &&
          <Link to="/write/new" className="visitor_post_btn">发帖吐槽／留言</Link>
        }

        <ol>
          {articles.map((o, i) =>
            <li key={i}>
              
              <a onClick={() => changeArticle(o._id)}>{`${o.title}(${o.views})`}</a>
              
              {sessionStorage.getItem('__token__') && (sessionStorage.getItem('__username__') === 'admin') &&
                <Link to={`/write/${o._id}`} className="update-btn">改</Link>
              }
              {/*<a onClick={() => delArticleById(o._id)} className="update-btn">删</a>*/}
            </li>
          )}
        </ol>
      </div>
    )
  }
}