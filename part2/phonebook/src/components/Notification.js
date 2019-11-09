import React from 'react'

const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'green',
        fontSize: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        border: 'solid',
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }
    return <div style={notificationStyle}>{message}</div>
}

const ErrorNotification = ({ message }) => {
    const notificationStyle = {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        border: 'solid',
        padding: 10,
        marginBottom: 10
    }
    
    if (message === null) {
        return null
    }
    return <div style={notificationStyle}>{message}</div>
}

export { Notification, ErrorNotification }