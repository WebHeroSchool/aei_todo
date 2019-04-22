import React from "react";

const element = (
    <div style={{
            textAlign: "center",
            color: "tomato",
            fontSize: "5em"
        }}>
        Hello World!
    </div>
);

const ItemList = () => (
    <div style={{
    textAlign: "center",
    color: "tomato",
    fontSize: ".5em"
}}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <ol>
        <li>Accumsan</li>
        <li>Commodo</li>
        <li>Tincidunt</li>
    </ol>
</div>);

const App = () => (
    <div  style={{
        textAlign: "center",
        color: "red",
        fontSize: "3em"
    }}>I'm App!
        <ItemList />
    </div>
);

export { element, ItemList, App };