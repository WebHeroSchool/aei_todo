import React from "react";
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"
import Footer from "../Footer/Footer"
import styles from './App.module.css'

class App extends React.Component {
    render() {
        document.body.style.margin = '0';

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
                    <Footer taskCount={6} />
                </div>
            </div>);
    }
}


export { App };