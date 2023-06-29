import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.root}>
                &copy; ExamEncoded 2022 - {(new Date()).getFullYear()}
            </div>
        </footer>
    )
}

export default Footer