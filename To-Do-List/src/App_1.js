import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state={
    todoList:[],
    input:'',
    isDoneCount:0,
  }

  handleInputText=(event)=>{
    this.setState({input:event.target.value});
  }

  addNewItem =()=>{
    let todoList = this.state.todoList;
    let input = this.state.input;

    todoList.push({
      description:input,
      done:false,
    });
    
    this.setState({
      todoList:todoList,
      input:'',
    });
    console.table(this.state.todoList);
  }

  handleCheckboxValue=(index)=>{
    let todoList = this.state.todoList;
    let isDoneCount = this.state.isDoneCount;
    if(todoList[index].done === true){
      todoList[index].done = false;
      isDoneCount = isDoneCount - 1;
    } else{
      todoList[index].done = true;
      isDoneCount = isDoneCount + 1;
    }
    this.setState({
      todoList:todoList,
      isDoneCount:isDoneCount,
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">React To Do List</h1>
        </header>
        {
          this.state.todoList.map((todoItem,index)=>{
            return (
              <div key={index}>      
                  <input type="checkbox" onChange={()=>{this.handleCheckboxValue(index)}}/>
                  <a>
                    {todoItem.description}
                  </a>
              </div>
            )
          })
        }
        { 
        this.state.todoList.length === this.state.isDoneCount 
        ?
        <h3>太棒了！你已完成所有待辦事項！</h3>
        :
        <h3>總共有 {this.state.todoList.length} 件待辦事項，目前完成 {this.state.isDoneCount} 件</h3>
        }
        <input type="text" placeholder="請輸入待辦事項"  required="required" value={this.state.input} onChange={this.handleInputText}></input> 
        <button onClick={this.addNewItem}>新增</button>
      </div>
    );
  }
}

export default App;
