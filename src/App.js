import React from "react";
import InputItem from "../src/InputItem/InputItem"
import ItemList from "../src/ItemList/ItemList"
import Footer from "../src/Footer/Footer"

const todoItem = ['Выучить JS', 'Сделать уборку', 'Сделать уборку в репозитории']
const taskCount = 5;

const App = () => (
    <div style={{
        color: "red",
        fontSize: "2em"
    }}>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList todoItem={todoItem} />
        <Footer taskCount={taskCount} />
    </div>
);

export { App };