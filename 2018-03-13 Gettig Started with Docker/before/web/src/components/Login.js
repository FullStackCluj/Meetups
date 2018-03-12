import React, {Component} from 'react';
import  {API_HOST, TOKEN_SECRET} from '../config';
import * as request from 'superagent';
import * as jwt from 'jwt-simple';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        email: '',
        password: '',
      },
      success: false,
      error: false
    }
  }

  handleChange = (path, value) => {
    this.setState({
      values: {
        ...this.state.values,
        [path]: value
      },
      error: false,
      success: false
    });
  }

  handleSubmit = async () => {
    try {
      const data = await request
        .post(`${API_HOST}/v1/auth/login`)
        .send(this.state.values)
        .then();

      if (data.status === 200) {
        const token = data.body.data;
        const user = jwt.decode(token, TOKEN_SECRET).iss;
        
        localStorage.setItem('Auth', JSON.stringify({token, user}));

        this.setState({success: true});
      }
      } catch(error) {
      this.setState({error: true});
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form style={{marginTop: '10em'}}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Email"
                value={this.state.values.email || ""}
                onChange={(e) => this.handleChange('email', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Password"
                value={this.state.values.password || ""}
                onChange={(e) => this.handleChange('password', e.target.value)}
                required
              />
            </div>
            <button type="button" className="btn btn-primary col-md-12" onClick={this.handleSubmit}>Login</button>
          </form>
          {this.state.success && <h5 style={{color: '#00ff00'}}><a href="/">Go to ToDo's</a></h5>}
          {this.state.error && <h5 style={{color: '#ff0000'}}>Something wrong happened.</h5>}
        </div>
      </div>
    );
  }
}