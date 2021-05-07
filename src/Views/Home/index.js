import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import StoryAdder from '@Components/StoryAdder'
import StoryFeed from '@Components/StoryFeed'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '2em',
    },
}))

export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={6}>
                    <StoryAdder />
                    <StoryFeed />
                </Grid>
            </Grid>
        </div>
    )
}
