import React from "react";

import styles from './Footer.module.css'

const Footer = ( { taskCount }) => (
    <div className={styles.tasks}> Осталось задач: {taskCount}</div>
);

Footer.defaultProps = {
    count: 0
};

export default Footer