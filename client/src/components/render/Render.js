import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { addOne } from '../../actions/renderActions'
import Line from './Line'
import { bindActionCreators } from 'redux'
import ReactPerformance from 'react-performance'


class Render extends Component {
  
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this)
  }
  
  onClick = id => {
    this.props.addOne(id)
  }
  
  renderLine = () => {
    const { lines } = this.props

    return lines.map(line => {
      return <Line
        key={line.id}
        id={line.id}
        text={line.text}
        quantity={line.quantity}
        onClick={this.onClick}
      />
    })
  }

  render() {
    return (
      <div>
        {this.renderLine()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lines: state.lines,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addOne,
}, dispatch)


// export default connect(mapStateToProps)(Render)
// export default connect(mapStateToProps, mapDispatchToProps)(Render)

export default ReactPerformance.connect({
  mapStateToProps,
  mapDispatchToProps,
  getId: 'Render',
  Component: Render,
})