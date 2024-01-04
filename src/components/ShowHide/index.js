// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHidden1: true, isHidden2: true}

  changeHiddenStatusF = () => {
    this.setState(prevState => ({isHidden1: !prevState.isHidden1}))
  }

  changeHiddenStatusL = () => {
    this.setState(prevState => ({isHidden2: !prevState.isHidden2}))
  }

  render() {
    const {isHidden1, isHidden2} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="name-container">
          <div>
            <button
              type="button"
              onClick={this.changeHiddenStatusF}
              className="butt"
            >
              Show/Hide Firstname
            </button>
            {isHidden1 ? null : <p className="name">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              onClick={this.changeHiddenStatusL}
              className="butt"
            >
              Show/Hide Lastname
            </button>
            {isHidden2 ? null : <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
