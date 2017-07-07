import fetch from 'isomorphic-fetch'
import NProgress from 'nprogress'
import { RECEIVE_ISSUES } from '../constants/ActionTypes.js'
import { CONFIG } from '../constants/Config.js'

// 接收issues
const receiveIssues = json => {
  NProgress.done()
  return {
    type: RECEIVE_ISSUES,
    posts: json
  }
}

export const fetchIssues = () => {
  NProgress.start()
  return dispatch => {
    let url = `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/issues`
    url += `?creator=${CONFIG.owner}`
    return fetch(url)
      .then(response => response.json())
      .then(json => 
        dispatch(receiveIssues(json))
      )
      .catch(e => {
        throw(e)
      })
  }
}












