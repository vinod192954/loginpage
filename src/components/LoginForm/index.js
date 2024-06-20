import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', gotError: false}
  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }
  submitUserDetails = async event => {
    event.preventDefault()
    const {username, password, gotError} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
      this.state({gotError: false})
    } else {
      this.setState({gotError: true})
    }
  }
  render() {
    const {username, password, gotError} = this.state
    const result = gotError ? 'Username and Password didnt match' : ''
    return (
      <div className="login-page">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="form-box" onSubmit={this.submitUserDetails}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="user-name-container">
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              id="username"
              className="user"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUserName}
              value={username}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              id="password"
              className="password"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          <div>
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="result">{result}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
