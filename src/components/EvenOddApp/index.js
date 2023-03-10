import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(pevState => ({count: pevState.count + Math.random() * 100}))
  }

  render() {
    const {count} = this.state
    const evenOrOdd = count / 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">
            Count<span className="heading"> {count} </span>
          </h1>
          <p className="even-odd-text">{evenOrOdd}</p>
          <button type="button" onClick={this.onClickButton} className="button">
            Increment
          </button>
          <p className="sub-line">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
