import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import ItemList from '../component/ItemList/ItemList';
import ToDoListStatus from '../component/ToDoListStatus/ToDoListStatus';
import ItemInput from '../component/ItemInput/ItemInput';

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
        <ItemList ItemList={this.state.toDoList} handleTodoItemStatus={this.handleTodoItemStatus}/>
        <ToDoListStatus toDoList={this.state.toDoList} isDoneItem={this.state.isDoneItem} />
        <ItemInput addItemInput={this.state.addItemInput} handleAddItemInput={this.handleAddItemInput} addToList={this.addToList} />
      </div>
    );
  }
}

export default App;
