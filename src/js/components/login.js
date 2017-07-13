import React from 'react'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch'
import { CONFIG } from '../constants/Config.js'

const appHistory = useRouterHistory(createHashHistory)()

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.usernameInput = ''
    this.passwordInput = ''
  }
  componentDidMount() {
    NProgress.done()
  }

  signupAction() {
    const url = `${CONFIG.server}/api/login`
    fetch(url, {
      method: 'POST',
      // 设置这个header，才能正确parse
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.usernameInput.value,
        password: this.passwordInput.value
      }),
      mode: 'cors'
    })
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        if(data.status === 1) {
          console.log( data )
          sessionStorage.setItem('__token__', data.token)
          appHistory.push('/')
        }
        else {
          console.log( data )
        }
      })
  }

  render() {
    return (
      <div id="login">
        <h3>登陆</h3>
        
        <div className="input-prepend">
          <input 
            className="input-top"
            type="text" 
            name="username"
            placeholder="用户名"
            ref={(input) => { this.usernameInput = input }} 
          />
        </div>
          
        <div className="input-prepend">  
          <input 
            className="input-bottom"
            type="text" 
            name="password"
            placeholder="密码"
            ref={(input) => { this.passwordInput = input }} 
          />
        </div>

        <button 
          className="login-btn"
          onClick={ ()=> this.signupAction() }
        >确定</button>
      </div>
    )
  }
}