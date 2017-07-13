import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { CONFIG } from '../constants/Config.js'

const appHistory = useRouterHistory(createHashHistory)()

export const verifyJWT = () => {
  if(!sessionStorage.getItem('__token__')) {
    appHistory.push('/login')
  }

  const url = `${CONFIG.server}/api/valid`
  fetch(url, {
    method: 'POST',
    // 设置这个header，才能正确parse
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token : sessionStorage.getItem('__token__') || ''
    }),
    mode: 'cors'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if(data.status === 0) {
        appHistory.push('/login')
      }
    })
}