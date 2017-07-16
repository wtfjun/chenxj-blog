import React from 'react'
import { Link } from 'react-router'

export default class Sidebar extends React.Component {

  render() {
    const { articles, changeArticle, delArticleById } = this.props
    return (
      <div id="sidebar">
        <h1><a href="">极简风格个人博客</a></h1>
        <p>
          作者：<a href="" className="blue-font">陈小俊</a>
        </p>
        <p>微信：<a href="" className="blue-font">c13266836563</a></p>
        <p>操作：
          <Link to="/write/new" className="blue-font">写文章</Link>
        </p>
        <b style={{lineHeight: '40px'}}>目录：</b>
        <ol>
          {articles.map((o, i) =>
            <li key={i}>
              
              <a onClick={() => changeArticle(o._id)}>{`${o.title}(${o.views})`}</a>
              { sessionStorage.getItem('__token__') && (sessionStorage.getItem('__username__') === 'admin' || o._id === '596b82bf53ffbb470071f7d9' || o._id === '596b853dc647a3cdfa5849b8') &&
              /*<a onClick={() => delArticleById(o._id)} className="update-btn">删</a>*/
              <Link to={`/write/${o._id}`} className="update-btn">改</Link>
              }

            </li>
          )}
        </ol>
      </div>
    )
  }
}