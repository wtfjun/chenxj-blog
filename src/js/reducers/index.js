import { RECEIVE_ISSUES } from '../constants/ActionTypes.js'

// 接受一个action，返回一个store
export default (defaultIssuesState, action) => {
  switch (action.type) {

  case RECEIVE_ISSUES:
    return Object.assign({}, defaultIssuesState, {
      isFetching: false,
      items: action.posts
    })

  default:
    return defaultIssuesState
  }
}


