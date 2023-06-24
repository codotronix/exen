import styles from "./Logo.module.css"

const Logo = props => {
    const { size=27, color='#444' } = props
    return (
        <span className={styles.root} style={{fontSize: size, color }}>Exam~Encoded</span>
    )
}

export default Logo