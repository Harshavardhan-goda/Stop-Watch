/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  render() {
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="img-head-card">
            <div className="image-icon">
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
            </div>
            <h1>Timer</h1>
          </div>
          <p>00:00</p>
          <div>
            <button className="btn1">Start</button>
            <button className="btn2">Stop</button>
            <button className="btn3">Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
