import fetch from 'isomorphic-fetch'
import NProgress from 'nprogress'
import { GET_ARTICLES, GET_ARTICLE_BY_ID, DEL_ARTICLE_BY_ID } from '../constants/ActionTypes.js'
import { CONFIG } from '../constants/Config.js'

// 获取所有文章id、title
export const getArticles = () => {
  return dispatch => {
    const url = `${CONFIG.server}/api/getArts`
    return fetch(url, {
      method: 'POST',
      // 设置这个header，才能正确parse
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: GET_ARTICLES,
          articles: data.articles
        })
      })
  }
}

// 获取文章详情
export const getArticleById = (_id) => {
  return dispatch => {
    const url = `${CONFIG.server}/api/getArtById`
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ _id })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: GET_ARTICLE_BY_ID,
          article: data.article
        })
      })
  }
}

// 删除文章
export const delArticleById = (_id) => {
  return dispatch => {
    const url = `${CONFIG.server}/api/delArtById`
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ _id, token: sessionStorage.getItem('__token__') })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: DEL_ARTICLE_BY_ID,
          articles: data.articles
        })
      })
  }
}

// 发布文章
export const sendArticle = (_id, title, content, token) => {
  const url = `${CONFIG.server}/api/post`
  return fetch(url, {
    method: 'POST',
    // 设置这个header，才能正确parse
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id,
      title,
      content,
      token
    }),
    mode: 'cors'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}
















