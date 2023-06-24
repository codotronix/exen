import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.root}>
            &copy; ExamEncoded 2022 - {(new Date()).getFullYear()}
        </footer>
    )
}

export default Footer