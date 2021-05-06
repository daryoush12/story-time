import React from 'react'
import styled from 'styled-components'
import { Grid, Column, View } from '@Components/layout'
import { Card } from '@Components/card'
import Avatar from '@Components/avatar'
import useStories from '../../Hooks/story'

export default function Home() {
    const stories = useStories()

    return (
        <View>
            <Grid>
                <Column width={20} />
                <Column width={60}>
                    <Card style={{ marginBottom: '1em' }}>
                        <label for="story">Write your story</label>
                        <input type="text" name="story" />
                    </Card>
                    <Card>
                        {stories && stories.map((story) => <p>{story}</p>)}
                    </Card>
                </Column>
                <Column width={20} />
            </Grid>
        </View>
    )
}
