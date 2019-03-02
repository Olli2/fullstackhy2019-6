export const showVoteNotification = (text) => {
    return {
        type: 'SHOW_VOTE',
        data: {
            text: text,
        }
    }
}

export const hideNotification = () => {
    return {
        type: 'HIDE_NOTIFICATION'
    }
}

const reducer = (state = '', action) => {
    switch(action.type) {
        case 'SHOW_VOTE':
            const notification = action.data.text !== '' ?  'You voted: '.concat(action.data.text) : ''
            return notification
        case 'HIDE_NOTIFICATION':
            return ''
        default:
            return state
    }
}

export default reducer