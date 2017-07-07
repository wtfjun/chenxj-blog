import React from 'react'

export default class Sidebar extends React.Component {
  render() {
    const { articles, changeContent } = this.props
    return (
      <div id="sidebar">
        <h1><a href="">chenxj的极简版博客</a></h1>
        <p>作者：chenxj</p>
        <b style={{lineHeight: '40px'}}>目录：</b>
        <ol>
          {articles.map((o, i) =>
            <li key={i}><a onClick={() => changeContent(i)}>{o.title}</a></li>
          )}
        </ol>
      </div>
    )
  }
}