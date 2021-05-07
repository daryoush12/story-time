import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import useStories from '../../Hooks/story'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import GridList from '@material-ui/core/GridList'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: '2em !important',
    },
    card: {
        width: '100%',
        marginTop: '1em',
        padding: theme.spacing(1),
    },
    title: {
        height: 'fit-content !important',
    },
}))

export default function StoryFeed() {
    const classes = useStyles()
    const stories = useStories()

    return (
        <div className={classes.grid}>
            <Typography variant="h6" className={classes.title}>
                Feed
            </Typography>
            {stories ? (
                <>
                    {stories.map((story, index) => (
                        <Card className={classes.card} key={index}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {story}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Read
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </>
            ) : (
                <p>Nothing to show.</p>
            )}
        </div>
    )
}
