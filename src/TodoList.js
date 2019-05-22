import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
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
        {/* 父组件向子组件传递参数 - 属性 + 方法(绑定this)
          子组件获得父组件参数 - props*/}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" type="text" value = {this.state.inputVal} onChange={this.handleInput.bind(this)}/>
          <button className="button" onClick = { this.handleSubmit.bind(this) }>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return  <TodoItem key={index} content={item} index={index}></TodoItem>
            })
          }
        </ul>
      </Fragment>
    )
  }
  getTodoItem(){
    
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