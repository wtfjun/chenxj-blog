import React from 'react'
import { connect } from 'react-redux'
import { getArticlesBySort } from '../actions/index.js'

class Sort extends React.Component {
  constructor() {
    super()
    this.classes = [
      { fName: '全部', name:'all', selected: true },
      { fName: 'JavaScript', name:'js', selected: false },
      { fName: 'React', name:'react', selected: false },
      { fName: '算法', name:'algorithm', selected: false },
      { fName: 'HTTP', name:'http', selected: false },
      { fName: '随笔', name:'life', selected: false },
      { fName: '游客吐槽', name:'visitor', selected: false }      
    ]
  }

  componentDidMount() {
    const { sort } = this.props
    this.handleOnclick(sort || 'all')
  }

  handleOnclick(name) {
    const { dispatch } = this.props
    this.classes.forEach(o => {
      if(o.name === name) {
        o.selected = true
      } else {
        o.selected = false
      }
    })
    dispatch(getArticlesBySort(name))
  }

  render() {
    
    return(
      <div className="class">
        {this.classes.map((o, i) => 
          <span 
            key={i} 
            className={o.selected ? 'selected': ''}
            onClick={() => this.handleOnclick(o.name)}
          >
            {o.fName}
          </span>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { articles } = state || { articles: [] }
  return { articles }
}

export default connect(mapStateToProps)(Sort)