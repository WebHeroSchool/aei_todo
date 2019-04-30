import React from "react";
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"
import Footer from "../Footer/Footer"
import styles from './App.module.css'

class App extends React.Component {
    state = {
            items: [
                {
                    value: 'Выучить JS',
                    isDone: true,
                    id: 1
                },
                {
                    value: 'Сделать уборку',
                    isDone: false,
                    id: 2
                },
                {
                    value: 'Сделать уборку в репозитории',
                    isDone: true,
                    id: 3
                }]
        };

    onClickDone = id =>
    {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem
        });
        this.setState({ items: newItemList});
    };


    render() {
        document.body.style.margin = '0';

        return (
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <h1 className={styles.title}>Список дел:</h1>
                    <InputItem />
                    <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                    <Footer taskCount={6} />
                </div>
            </div>);
    }
}


export { App };