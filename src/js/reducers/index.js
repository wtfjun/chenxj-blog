import NProgress from 'nprogress'
import { GET_ARTICLES, GET_ARTICLE_BY_ID, DEL_ARTICLE_BY_ID } from '../constants/ActionTypes.js'

// 接受一个action，返回一个store
export default (defaultIssuesState, action) => {
  switch (action.type) {
  
  case GET_ARTICLES:
    return Object.assign({}, defaultIssuesState, {
      isFetching: false,
      articles: action.articles
    })

  case GET_ARTICLE_BY_ID:
    return Object.assign({}, defaultIssuesState, {
      isFetching: false,
      article: action.article
    })
  
  case DEL_ARTICLE_BY_ID:
    return Object.assign({}, defaultIssuesState, {
      isFetching: false,
      articles: action.articles
    })

  default:
    return defaultIssuesState
  }
}


