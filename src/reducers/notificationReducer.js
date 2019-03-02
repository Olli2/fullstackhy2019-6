export const showVoteNotification = (text, seconds) => {
    return async dispatch => {
        dispatch({
        type: 'SHOW_VOTE',
        data: {
            text: text,
        }
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE_NOTIFICATION'
            })
        }, seconds*1000);
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