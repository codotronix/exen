import styles from "./Panel.module.css"

const Panel = props => {
    let { children, justify="left" } = props

    return (
        <div className={styles.root} style={{ textAlign: justify }}>
            {children}
        </div>
    )
}

export default Panel