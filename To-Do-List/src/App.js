import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    addItemInput:'',
    toDoList:[],
    isDoneItem:0
  }

  handleAddItemInput =(event)=>{
    this.setState({addItemInput:event.target.value});
  }

  addToList=()=>{
    let toDoList = this.state.toDoList;
    toDoList.push(
      {
        item:this.state.addItemInput,
        isDone:false
      }
    );
    this.setState({
      toDoList:toDoList,
      addItemInput:''
    });
    console.log(this.state.toDoList);
  }

  handleTodoItemStatus =(index)=>{
    let toDoList =this.state.toDoList;
    let isDoneItem = this.state.isDoneItem;
    if(toDoList[index].isDone === true){
      isDoneItem  = isDoneItem - 1;
      toDoList[index].isDone = false;
    } else{
      isDoneItem  = isDoneItem + 1;
      toDoList[index].isDone = true;
    }

    this.setState({
      toDoList:toDoList,
      isDoneItem:isDoneItem
    });

    console.log(this.state.isDoneItem);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React To Do List</h1>
        </header>
        {
          this.state.toDoList.map((todoItem,index)=>{
           if(todoItem.isDone === true){
            return(
              <div key={index}>
                  <input type="checkbox" onChange={() => this.handleTodoItemStatus(index)}></input>
                  <a style={{textDecoration:'line-through',color:'#c8c8c8'}}>{todoItem.item}</a>
                </div>   
            )
           } else{
            return(
              <div key={index}>
                  <input type="checkbox" onChange={() => this.handleTodoItemStatus(index)}></input>
                  <a>{todoItem.item}</a>
                </div>   
            )
           }
          })
       }
       {  
         this.state.toDoList.length === this.state.isDoneItem 
         ?
         <h3>{
           this.state.toDoList.length === 0 ? '請輸入待辦事項！':'太棒了！已完成所有待辦事項！'
          }</h3>
         :
         <h3>總共有 {this.state.toDoList.length} 個待辦事項，已完成 {this.state.isDoneItem} 個工作。</h3>
       }
        <input type="text" placeholder="請輸入待辦事項" value={this.state.addItemInput} onChange={this.handleAddItemInput}></input> 
        <button onClick={this.addToList}>新增</button>
      </div>
    );
  }
}

export default App;
