import styles from "./Panel.module.css"

const Panel = props => {
    let { children, justify="left" } = props // justify can be any of justify-content css values

    return (
        <div className={styles.root} style={{ justifyContent: justify }}>
            {children}
        </div>
    )
}

export default Panel