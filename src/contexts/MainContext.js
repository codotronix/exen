import { createContext, useContext, useReducer } from "react";

const initState = {
    isNightMode: false,
    notifications: []
}

export const ACTIONS = {
    NIGHT_MODE_ON: 'night mode on',
    NIGHT_MODE_OFF: 'night mode off',
    ADD_NOTIFICATION: 'add notification',
    DELETE_NOTIFICATION: 'delete notification'
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case ACTIONS.NIGHT_MODE_ON: {
            return {
                ...state,
                isNightMode: true
            }
        }

        case ACTIONS.NIGHT_MODE_OFF: {
            return {
                ...state,
                isNightMode: false
            }
        }

        // show a new popup notification
        case ACTIONS.ADD_NOTIFICATION: {
            const { id, msg } = payload
            const notifications = [...state.notifications, { id, msg }]

            return {
                ...state,
                notifications
            }
        }

        // delete a notification with given id
        case ACTIONS.DELETE_NOTIFICATION: {
            const { id } = payload
            const notifications = state.notifications.filter(n => n.id !== id)

            return {
                ...state,
                notifications
            }
        }

        default: {
            return state
        }
    }
}

const MainContext = createContext({})

export const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <MainContext.Provider value={[state, dispatch]}>
            { children }
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext)