import React from 'react'
import marked from 'marked'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch'

import { connect } from 'react-redux'
import { CONFIG } from '../constants/Config.js'
import { verifyJWT } from '../constants/Verify.js'

class Write extends React.Component {
  constructor() {
    super()
    this.state = {
      write : 'markdown',
      height: '100px'
    }
  }

  componentDidMount() {
    verifyJWT()
    NProgress.done()
    this.setState({ 
      height: window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight
    })
  }

  handleWriteChange(event) {
    this.setState({ write: event.target.value })
  }

  sendArticle() {
    const url = `${CONFIG.server}/api/post`
    fetch(url, {
      method: 'POST',
      // 设置这个header，才能正确parse
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.titleInput.value,
        content: this.state.write
      }),
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div id="write">
        <div className="left" style={{ height: this.state.height }}>
          
          <input  
            type="text"
            className="title"
            defaultValue="在这里输入文章标题"
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
  const { article } = state 
  return { article }
}

export default connect(mapStateToProps)(Write)