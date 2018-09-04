// import React, { PureComponent } from 'react'
import React from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { addOne } from '../../actions/renderActions'


// class Line extends PureComponent {
  // onClick = id => {
  //   this.props.addOne(id)
  // }

  // render() {
  //   const { text, quantity, id, onClick } = this.props

const Line = ({
  id,
  text,
  quantity,
  onClick,
}) => {


  return (
    <div className='container' style={{ 'marginBottom': '25px', 'backgroundColor': 'pink' }}>
      <div className='row'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-5'>
              <span>{text}</span>
            </div>
            <div className='col-md-1'>
              <span>|</span>
            </div>
            <div className='col-md-3 text-center'>
              <span>{quantity}</span>
            </div>
            <div className='col-md-1'>
              <span>|</span>
            </div>
            <div className='col-md-2'>
              <span>
                {/* <button onClick={this.onClick.bind(this, id)}> */}
                <button onClick={() => onClick(id)}>
                  +
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// }

Line.propTypes = {
  text: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}


// export default connect(null, { addOne })(Line)
export default Line 