import react, { useEffect, useState } from 'react'

export default function useStories() {
    const [stories, setStories] = useState(null)

    useEffect(() => {
        fetch(`${process.env.STORY_API}/stories/all`)
            .then((res) => res.json())
            .then((data) => setStories(data))
    }, [])

    return stories
}

export async function addStory(story) {
    // Default options are marked with *
    const response = await fetch(`${process.env.STORY_API}/stories/new`, {
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
    return response.json()
}
