import React from "react";
import Item from "../Item/Item"

const ItemList = ({items}) => (
    <div style={{
        color: "tomato",
        fontSize: ".6em"
    }}>
        <ul>
            {items.map( item =>
                <li key={item.value}><Item value={item.value}/></li>)}
        </ul>
    </div>);


export default ItemList;