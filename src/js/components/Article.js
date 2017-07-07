import React from 'react'
import marked from 'marked'

export default class Sidebar extends React.Component {
  render() {
    const { article } = this.props
    return (
      <div id="content" className="article">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-time">{article.created_at && article.created_at.substr(0, 10)}</p>
        {article.body &&
        <div className="article-desc article-content" 
          dangerouslySetInnerHTML={{__html: marked(article.body)}}>
        </div>
        }
      </div>
    )
  }
}