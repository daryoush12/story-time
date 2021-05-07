import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import FormControl from '@material-ui/core/FormControl'
import { addStory } from '../../Hooks/story'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '2em',
    },
    paper: {
        padding: theme.spacing(1),
    },

    searchbar: {
        width: '90%',
    },
}))

export default function StoryAdder() {
    const classes = useStyles()
    const [isAdding, setIsAdding] = useState(false)
    const [story, setStory] = useState('')

    function SubmitStory(e) {
        e.preventDefault()
        setIsAdding(true)
        fetch(`${process.env.STORY_API}/stories/new`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ story: story }),
        })
            .then((res) => res.json())
            .then(() => {
                setIsAdding(false)
            })
    }

    function HandleInput(e) {
        e.preventDefault()
        setStory(e.target.value)
    }

    return (
        <Paper className={classes.paper}>
            <Input
                className={classes.searchbar}
                startAdornment={<Icon>book</Icon>}
                onChange={HandleInput}
            >
                Add a story
            </Input>
            <Button color="primary" onClick={SubmitStory}>
                Tell your tale
            </Button>
        </Paper>
    )
}
