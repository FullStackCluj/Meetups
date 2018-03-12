import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      token: "",
    }
  }

  componentDidMount() {
    const json = JSON.parse(localStorage.getItem('Auth'));
    if (json) {
      this.setState(json);
    }
  }

  render() {
    return (
      <div className="container">
        <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="/">ToDo's</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link className="btn btn-sm btn-outline-secondary" to="/login" style={{marginRight: '1em'}}>Login</Link>
            <Link className="btn btn-sm btn-outline-secondary" to="/register">Sign up</Link>
          </div>
        </div>
      </header>

        <main role="main" className="container">
          <Route path="/" exact component={(props) => <Todos {...props} {...this.state} />} />
          <Route path="/register" exact component={(props) => <Register {...props} {...this.state} />} />
          <Route path="/login" exact component={(props) => <Login {...props} {...this.state} />} />
        </main>
      </div>
    );
  }
}

export default App;