import { useState } from "react"
import clsx from 'clsx'
import styles from './Accordion.module.css'

const Accordion = props => {
    const { title, children, classes='' } = props
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={clsx(styles.root, isOpen && styles.open, classes)}>
            <div className={clsx(styles.header, 'acc_header')} onClick={() => setOpen(!isOpen)}>
                {title}

                { !isOpen && <i className={clsx("fa-solid fa-chevron-down", styles.ico)}></i> }

                { isOpen && <i className={clsx("fa-solid fa-chevron-up", styles.ico)}></i> }
                
            </div>
            <div className={clsx(styles.body, 'acc_body')}>
                {children}
            </div>
        </div>
    )
}

export default Accordion