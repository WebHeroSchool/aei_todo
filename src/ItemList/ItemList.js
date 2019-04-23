import React from "react";
import Item from "../Item/Item"

const ItemList = ({todoItem}) => (
    <div style={{
        color: "tomato",
        fontSize: ".6em"
    }}>
        <ul>
            <li><Item todoItem={todoItem[0]}/></li>
            <li><Item todoItem={todoItem[1]}/></li>
            <li><Item todoItem={todoItem[2]}/></li>
        </ul>
    </div>);


export default ItemList;