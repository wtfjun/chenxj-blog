import React from 'react'
import marked from 'marked'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { connect } from 'react-redux'
import { getArticleById, sendArticle } from '../actions/index.js'
import { CONFIG } from '../constants/Config.js'
import { verifyJWT } from '../constants/Verify.js'

const appHistory = useRouterHistory(createHashHistory)()

class Write extends React.Component {
  constructor() {
    super()
    this.state = {
      write : 'markdown',
      height: '100px'
    }
  }

  componentDidMount() {
    // 登陆验证
    verifyJWT()
    const { dispatch } = this.props
    const { id } = this.props.params
    // 得到当前文章信息
    dispatch(getArticleById(id))
      .then(() => {
        this.titleInput.value = this.props.article.title
        this.setState({ 
          height: window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight,
          write: this.props.article.content
        })
        NProgress.done()
      })
  }

  handleWriteChange(event) {
    this.setState({ write: event.target.value })
  }

  sendArticle() {
    const _id = this.props.params.id,
      title = this.titleInput.value,
      content = this.state.write,
      token = sessionStorage.getItem('__token__')
    sendArticle(_id, title, content, token)
      .then(() => {
        appHistory.push('/')
      }) 
  }

  render() {
    return (
      <div id="write">
        <div className="left" style={{ height: this.state.height }}>
          
          <input  
            type="text"
            className="title"
            defaultValue=""
            ref={(input) => { this.titleInput = input }}
          />

          <textarea 
            spellCheck="false"
            rows="10"
            onChange={ (e) => this.handleWriteChange(e) } 
            value={this.state.write}
          ></textarea>

          <button 
            className="send-btn"
            onClick={ () => this.sendArticle() }
          >
            发布
          </button>

        </div>
        <div className="right">
          <div 
            className="right-article article-desc article-content" 
            dangerouslySetInnerHTML={{ __html: marked(this.state.write) }}
            style={{ height: this.state.height }}
          >
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { article } = state || { article: {} }
  return { article }
}

export default connect(mapStateToProps)(Write)