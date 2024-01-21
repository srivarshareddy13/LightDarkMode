// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: true}
  onButton = () => {
    this.setState(prevState => ({prevState: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state
    const modeClass = isLight ? 'dark-mode' : 'light-mode'
    const buttonText = isLight ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app=container">
        <div className={'container ${modeClass}'}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
