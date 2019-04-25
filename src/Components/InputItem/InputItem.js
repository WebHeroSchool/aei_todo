import React from "react";
import TextField from '@material-ui/core/TextField';

const InputItem = () => (

            <TextField
                id="standard-with-placeholder"
                label="Добавить задание"
                placeholder="Введите ваше задание здесь"
                margin="normal"
                style={{ margin: 8 }}
                fullWidth
                variant="outlined"
            />
        );


export default InputItem



