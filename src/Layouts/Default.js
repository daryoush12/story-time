import React from 'react'
import Navigation from '@Components/Navigation'

export default function Default({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    )
}
