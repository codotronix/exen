import { ACTIONS, useMainContext } from "../../../contexts/MainContext"

export const useNotification = () => {
    const [,dispatch] = useMainContext()

    function notify (msg) {
        // create a pseudo unique
        const id = Math.random().toString().replace('.', '')

        const addNotificationAction = {
            type: ACTIONS.ADD_NOTIFICATION,
            payload: { id, msg }
        }

        // add the notication
        dispatch(addNotificationAction)

        // Delete this notifcation after 3 secs
        setTimeout(() => {
            const deleteNotificationAction = {
                type: ACTIONS.DELETE_NOTIFICATION,
                payload: { id }
            }

            dispatch(deleteNotificationAction)
        }, 
        5000)
    }

    return notify
}