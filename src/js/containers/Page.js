import React from 'react'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import { getArticles, getArticleById, delArticleById } from '../actions/index.js'
import Sidebar from '../components/Sidebar.js'
import Article from '../components/Article.js'

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
    NProgress.start()
    dispatch(getArticles())
      .then(() => {
        const { _id } = this.props.articles[0]
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
    const { dispatch } = this.props
    NProgress.start()
    dispatch(getArticleById(_id))
      .then(() => {
        this.setState({
          article: this.props.article
        })
      })
      .then(dispatch(getArticles()))
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
    return (
      <div>

        <Sidebar 
          articles={articles} 
          changeArticle={this.changeArticle} 
          delArticleById={ (_id) => this.delArticle(_id) } 
        />

        <Article article={article} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching, items, articles, article } = state || { isFetching: true, items: [], articles: [] }
  return { isFetching, items, articles, article }
}

export default connect(mapStateToProps)(Page)