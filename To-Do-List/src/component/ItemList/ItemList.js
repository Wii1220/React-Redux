import React , { Component } from 'react';
import './ItemList.css';


class ItemList extends Component {
    render(){
        return (
            <div>
            {
            this.props.ItemList.map((todoItem,index)=>{
                if(todoItem.isDone === true){
                 return(       
                   <div key={index}>
                       <input type="checkbox" onChange={() => this.props.handleTodoItemStatus(index)}></input>
                       <a style={{textDecoration:'line-through',color:'#c8c8c8'}}>{todoItem.item}</a>
                   </div>   
                 )} else{
                 return(
                   <div key={index}>
                       <input type="checkbox" onChange={() => this.props.handleTodoItemStatus(index)}></input>
                       <a>{todoItem.item}</a>
                     </div>   
                 )}
             })
            }
         </div>
        )
    }
}

export default ItemList;
