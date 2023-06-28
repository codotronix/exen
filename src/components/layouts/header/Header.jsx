import styles from "./Header.module.css"
import { Logo } from "../../common"
import routes from "../../../routes"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo size={30} />

            <nav>
                <ul className={styles.navs}>
                    {
                        routes.filter(r => r.displayName).map(r => <li key={r.path}>
                            <Link to={r.path}>{r.displayName}</Link>
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header