import React, {Component} from 'react';
import  {API_HOST} from '../config';
import * as request from 'superagent';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        image: ''
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
        .post(`${API_HOST}/v1/user`)
        .send(this.state.values)
        .then();
      if (data.status === 201) {
        this.setState({success: true});
        window.location.href = '/login';
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
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="first-name"
                placeholder="First Name"
                value={this.state.values.first_name || ""}
                onChange={(e) => this.handleChange('first_name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="last-name"
                placeholder="Last Name"
                value={this.state.values.last_name || ""}
                onChange={(e) => this.handleChange('last_name', e.target.value)}
                required
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="image"
                placeholder="Image"
                value={this.state.values.image || ""}
                onChange={(e) => this.handleChange('image', e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary col-md-12" onClick={this.handleSubmit}>Register</button>
          </form>
          {this.state.error && <h5 style={{color: '#ff0000'}}>Something wrong happened.</h5>}
        </div>
      </div>
    );
  }
}