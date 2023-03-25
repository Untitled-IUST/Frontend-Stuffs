import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label><br></br>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label><br></br>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div class="mb-3">
          <label for="phone">Enter your phone number</label><br></br>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" placeholder="Phone Number"/>
        </div>
        <div class="mb-3">
          <label for="neighberhood" > please select your neighberhood</label><br></br>
          <select id="neighberhood">
            <option value = "Jordan">Jordan</option>
            <option value = "Pasdaran">Pasdaran</option>
            <option value = "Narmak">Narmak</option>

          </select>
        </div>

        <div className="mb-3">
          <label>Email address</label><br></br>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label><br></br>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}