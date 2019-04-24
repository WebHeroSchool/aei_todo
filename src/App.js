import React from "react";
import InputItem from "../src/InputItem/InputItem"
import ItemList from "../src/ItemList/ItemList"
import Footer from "../src/Footer/Footer"


const taskCount = 5;

const App = () => {
const items = [
    {
        value: 'Выучить JS'
    },
    {
        value: 'Сделать уборку'
    },
    {
        value: 'Сделать уборку в репозитории'
    }];
return (
    <div style={{
        color: "red",
        fontSize: "2em"
    }}>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer taskCount={taskCount} />
    </div>)
};

export { App };