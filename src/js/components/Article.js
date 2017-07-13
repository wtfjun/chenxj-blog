import React from 'react'
import marked from 'marked'

export default class Sidebar extends React.Component {
  render() {
    const { article } = this.props
    return (
      <div id="content" className="article">
        <h1 className="article-title">{article && article.title}</h1>
        <p className="article-time">{article && article.create_time && article.create_time.substr(0, 10)}</p>
        {article && article.content &&
        <div className="article-desc article-content" 
          dangerouslySetInnerHTML={{__html: marked(article.content)}}>
        </div>
        }
      </div>
    )
  }
}