import React from "react";

const Footer = ( { taskCount }) => (
    <div style={{fontSize:".7em"}}> Осталось выполнить: {taskCount} дел</div>
);

export default Footer