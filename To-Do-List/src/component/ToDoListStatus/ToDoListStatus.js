import React, { Component } from 'react';
import './ToDoListStatus.css';


class ToDoListStatus extends Component {
    render() {
        return (
            <div>
                {
                this.props.toDoList.length === this.props.isDoneItem
                    ?
                    <h3>{
                        this.props.toDoList.length === 0 ? '請輸入待辦事項！' : '太棒了！已完成所有待辦事項！'
                    }</h3>
                    :
                    <h3>總共有 {this.props.toDoList.length} 個待辦事項，已完成 {this.props.isDoneItem} 個工作。</h3>
                }
            </div>
        )
    }
}

export default ToDoListStatus;
