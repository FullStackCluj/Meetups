import React, {Component} from 'react';
import {API_HOST} from '../config';
import * as request from 'superagent';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: {
        id: '',
        task: '',
        done: false,
        user_id: ''
      },
      todos: []
    }
  }
  async componentDidMount() {
    if(!JSON.parse(localStorage.getItem('Auth'))) {
      return this.props.history.push('/login');
    }
    if (this.props.token) {
      await this.getTodos();
    }
  }

  getTodos = async () => {
    const data = await request
      .get(`${API_HOST}/v1/todo`)
      .set('Authorization', `Bearer ${this.props.token}`)
      .then();
    if (data.body.success) {
      this.setState({todos: data.body.data});
    }
  }

  handleChange = (path, value) => {
    this.setState({
      current: {
        ...this.state.current,
        [path]: value
      },
      error: false,
      success: false
    });
  }

  handleSubmit = async () => {
    const todo = this.state.current;
    let data;
    if (todo.id) {
      data = await request
        .put(`${API_HOST}/v1/todo/${todo.id}`)
        .set('Authorization', `Bearer ${this.props.token}`)
        .send(todo)
        .then();
    } else {
      data = await request
        .post(`${API_HOST}/v1/todo/${todo.id}`)
        .set('Authorization', `Bearer ${this.props.token}`)
        .send({...todo, user_id: this.props.user.id})
        .then();
    }
    if (data.body.success) {
      this.setState({current: {
        id: '',
        task: '',
        done: false,
        user_id: ''
      }});
      await this.getTodos();
    }
  }

  setCurrent = (id) => {
    this.setState({current: this.state.todos.find(todo => todo.id === id)});
  }

  toggleState = async (id) => {
    const todo = this.state.todos.find(todo => todo.id === id);
    todo.done = !todo.done;

    const data = await request
      .put(`${API_HOST}/v1/todo/${todo.id}`)
      .set('Authorization', `Bearer ${this.props.token}`)
      .send(todo)
      .then();
    if (data.body.success) {
      await this.getTodos();
    }
  }

  renderTodos() {
    return this.state.todos.map(todo => {
      return (
        <div className="card" style={{backgroundColor: todo.done ? '#c3c3c3' : '#fff', color: todo.done ? '#fff' : '#000'}} key={todo.id} onClick={() => this.toggleState(todo.id)}>
          <div className="card-body">
            <h3 className="col-md-9" style={{display: 'inline-block'}}>{todo.task}</h3>
            <button className="btn offset-md-2 col-md-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24" onClick={(e) => {e.preventDefault(); e.stopPropagation(); this.setCurrent(todo.id)}}>
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return [
      <div className="row" key="form">
        <div className="col-md-8 offset-md-2">
          <form className="form-inline" style={{marginTop: '5em'}}>
            <label className="sr-only" htmlFor="todo">Todo</label>
            <input
              type="text"
              className="form-control form-control-lg col-md-9"
              id="todo"
              placeholder="Add a todo item"
              value={this.state.current.task || ""}
              onChange={(e) => this.handleChange('task', e.target.value)}
              required
            />

            <button type="button" className="btn btn-primary col-md-2 offset-md-1" onClick={this.handleSubmit}>{this.state.current.id ? 'Update' : 'Add'}</button>
          </form>
        </div>
      </div>,
      <hr key="separator"/>,
      <div className="row" key="list">
        <div className="col-md-8 offset-md-2">
          {this.renderTodos()}
        </div>
      </div>
    ]
      
  ;
  }
}