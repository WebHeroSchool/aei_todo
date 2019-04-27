import React from "react";
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"
import Footer from "../Footer/Footer"
import styles from './App.module.css'

const taskCount = 5;
document.body.style.margin = 0;

const App = () => {
const items = [
    {
        value: 'Выучить JS',
        isDone: true
    },
    {
        value: 'Сделать уборку',
        isDone: false
    },
    {
        value: 'Сделать уборку в репозитории',
        isDone: true
    }];
return (
    <div className={styles.wrap}>
        <div className={styles.main}>
            <h1 className={styles.title}>Список дел:</h1>
            <InputItem />
            <ItemList items={items} />
            <Footer taskCount={taskCount} />
        </div>
    </div>)
};

export { App };