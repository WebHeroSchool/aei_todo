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
                    id: 2
                },
                {
                    value: 'Сделать уборку в репозитории',
                    id: 3
                }],
        count: 3
        };


    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem
        });
        this.setState({ items: newItemList});
    };

    onClickDelete = id => this.setState(state => ({
        items: state.items.filter(item =>
            item.id !== id),
        count: state.count - 1
    }));

    onClickAdd = (value) => this.setState(state => ({
        items:[
            ...state.items,
            {
                value,
                isDone: false,
                id: state.count + 1
            }],

        count: state.count + 1
        }));


    render() {
        document.body.style.margin = '0';

        return (
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <h1 className={styles.title}>Список дел:</h1>
                    <InputItem onClickAdd={this.onClickAdd}/>
                    <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={ this.onClickDelete }/>
                    <Footer taskCount={this.state.count} />
                </div>
            </div>);
    }
}


export { App };