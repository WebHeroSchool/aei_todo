import React from "react";
import InputItem from "../src/InputItem/InputItem"
import ItemList from "../src/ItemList/ItemList"
import Footer from "../src/Footer/Footer"

const App = () => (
    <div style={{
        color: "red",
        fontSize: "2em"
    }}>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList />
        <Footer />
    </div>
);

export { App };