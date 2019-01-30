import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  coordsArray = (e) => {
     this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  render () {
    return (
      <button onClick={(e) => this.coordsArray(e)}></button>
    )
  }
}
