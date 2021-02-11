import React, { useState } from 'react'
import './Todo.css'
import { List, ListItemAvatar, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import db from './firebase'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
        setOpen(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am a Modal</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update Me</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy Deadline..." />
                </ListItem>
                <Button onClick={e => setOpen(true)}>Edit Me</Button>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
            </List>
        </>
    )
}

export default Todo

