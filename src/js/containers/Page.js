import React from 'react'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import { getArticlesBySort, getArticleById, delArticleById } from '../actions/index.js'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import Sidebar from '../components/Sidebar.js'
import Article from '../components/Article.js'

const appHistory = useRouterHistory(createHashHistory)()

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      article: ''
    }
    this.changeArticle = this.changeArticle.bind(this)
    this.delArticle = this.delArticle.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    let sort = 'all'
    NProgress.start()
    if(this.props.location.query.sort === 'visitor') {
      sort = 'visitor'
    }
    dispatch(getArticlesBySort(sort))
      .then(() => {
        const _id = this.props.location.query.id || this.props.articles[0]._id
        dispatch(getArticleById(_id))
          .then(() => {
            NProgress.done()
            this.setState({
              article: this.props.article
            })
          })
      })
  }

  changeArticle(_id) {
    const { dispatch, sort } = this.props

    appHistory.push(`/?id=${_id}`)
    NProgress.start()
    dispatch(getArticleById(_id))
      .then(() => {
        this.setState({
          article: this.props.article
        })
      })
      .then(dispatch(getArticlesBySort(sort)))
      .then(NProgress.done())
  }

  delArticle(_id) {
    const { dispatch } = this.props
    NProgress.start()
    dispatch(delArticleById(_id))
      .then(() => {
        NProgress.done()
        this.setState({
          article: this.props.articles[0]
        })
      })
  }

  render() {
    const { articles } = this.props
    const { article } = this.state
    const { sort } = this.props.location.query
    return (
      <div>

        <Sidebar 
          articles={articles} 
          sort={sort}
          changeArticle={this.changeArticle} 
          delArticleById={ (_id) => this.delArticle(_id) } 
        />

        <Article article={article} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { 
    isFetching, 
    items, 
    articles, 
    article, 
    sort 
  } = state || { 
      isFetching: true, 
      items: [], 
      articles: [], 
      sort: 'all' 
    }
  return { isFetching, items, articles, article, sort }
}

export default connect(mapStateToProps)(Page)