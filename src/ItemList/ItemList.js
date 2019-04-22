import React from "react";
import Item from "../Item/Item"

const ItemList = () => (
    <div style={{
        color: "tomato",
        fontSize: ".5em"
    }}>
        <ul>
            <li><Item /></li>
            <li><Item /></li>
            <li><Item /></li>
        </ul>
    </div>);


export default ItemList;