import React from 'react'
import NProgress from 'nprogress'
import fetch from 'isomorphic-fetch'
import { CONFIG } from '../constants/Config.js'

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
    const url = `${CONFIG.server}/api/signup`
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
        console.log(data)
      })
  }

  render() {
    return (
      <div id="login">
        <span>用户名：</span>
        
        <input 
          type="text" 
          name="username"
          ref={(input) => { this.usernameInput = input }} 
        />

        <span>密码：</span>
        
        <input 
          type="text" 
          name="password"
          ref={(input) => { this.passwordInput = input }} 
        />

        <button onClick={ ()=> this.signupAction() }>确定</button>
      </div>
    )
  }
}