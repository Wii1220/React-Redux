import React , { Component } from 'react';
import './ItemInput.css';


class ItemInput extends Component {
    render(){
        return (
            <div>
                <input type="text" placeholder="請輸入待辦事項" value={this.props.addItemInput} onChange={this.props.handleAddItemInput}></input> 
                <button onClick={this.props.addToList}>新增</button>
            </div>
        )
    }
}

export default ItemInput;
