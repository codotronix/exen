import { useMainContext, ACTIONS } from "../../../contexts/MainContext"
import styles from "./Notifications.module.css"
import clsx from 'clsx'
/**
 * This component is actually a notications hub 
 * And should be controlling any number of notifications
 */

const Notifications = () => {
    const [{ notifications }, dispatch] = useMainContext()  // only notifications from main State

    const closeNotification = id => {
        const action = { 
            type: ACTIONS.DELETE_NOTIFICATION,
            payload: { id }
        }

        dispatch(action)
    }

    return (
        <div className={styles.root}>
            {
                notifications.map(n => 
                <div key={n.id} className={styles.notification}>
                    <i className={clsx(styles.close, 'fa-solid fa-xmark')} onClick={() => closeNotification(n.id)}></i>
                    {n.msg}
                </div>)
            }
        </div>
    )
}

export default Notifications