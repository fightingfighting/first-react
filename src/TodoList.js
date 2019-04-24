import React, { Component, Fragment } from 'react'
import './style.css'
class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }
  }
  render(){
    return (
      <Fragment>
        <div>
          <input className="input" type="text" value = {this.state.inputVal} onChange={this.handleInput.bind(this)}/>
          <button className="button" onClick = { this.handleSubmit.bind(this) }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={ this.handleDelete.bind(this, index) }>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInput(e){
    this.setState({
      inputVal: e.target.value
    })

  }
  handleSubmit(){
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
  handleDelete(index){
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList