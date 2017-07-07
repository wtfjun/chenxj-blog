import React from 'react'
import { connect } from 'react-redux'
import { fetchIssues } from '../actions/index.js'
import Sidebar from '../components/Sidebar.js'
import Article from '../components/Article.js'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      content: ''
    }
    this.changeContent = this.changeContent.bind(this)
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchIssues())
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      content: nextProps.items[0]
    })
  }

  changeContent(n) {
    this.setState({
      content: this.props.items[n]
    })
  }

  render() {
    let articles = []
    this.props.items.map(o => {
      articles.push({title: o.title, created_at: o.created_at})
    })
    return (
      <div>
        <Sidebar articles={articles} changeContent={this.changeContent} />
        <Article article={this.state.content} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching, items } = state || { isFetching: true, items: [] }
  return { isFetching, items }
}

export default connect(mapStateToProps)(Page)