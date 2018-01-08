import React, {Component} from 'react';

export default class Test extends Component {

  static fetchData() {
  } // will be used for server side rendering

  render() {
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <form className="form-horizontal">
          <p className="mb-10">
            <input placeholder="Username" className="form-control" type="text" name="username" id="1"/>
          </p>
          <p>
            <input placeholder="password" className="form-control" type="password" name="password" id="2"/>
          </p>
        </form>
      </div>
    );
  }
}
