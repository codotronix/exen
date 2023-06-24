import styles from "./Header.module.css"
import { Logo } from "../../common"

const Header = () => {
    return (
        <header className={styles.root}>
            <Logo size={30} />
        </header>
    )
}

export default Header