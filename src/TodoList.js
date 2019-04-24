import React, { Component, Fragment } from 'react'
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
          <input type="text" value = {this.state.inputVal} onChange={this.handleInput.bind(this)}/>
          <button onClick = { this.handleSubmit.bind(this) }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li>{index}-{item}</li>
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
      list: [...this.state.list, this.state.inputVal]
    })
  }
}

export default TodoList