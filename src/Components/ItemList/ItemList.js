import React from "react";
import Item from "../Item/Item"
import List from '@material-ui/core/List';
import styles from './ItemList.module.css'


const ItemList = ({items, onClickDone, onClickDelete }) => (
        <List className={ styles.itemList}>
            {items.map(item => (
                <Item
                    key={item.id}
                    value={item.value}
                    isDone={item.isDone}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                    id={item.id }
                />
            ))}
        </List>
    );


export default ItemList;
