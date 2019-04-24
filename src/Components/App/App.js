import React from "react";
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"
import Footer from "../Footer/Footer"
import '../App/App.css'

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
    <div className="wrap">
        <h1 className="wrap__title">Список дел:</h1>
        <InputItem />
        <ItemList items={items} />
        <Footer taskCount={taskCount} />
    </div>)
};

export { App };