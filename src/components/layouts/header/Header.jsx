import { useState } from "react"
import styles from "./Header.module.css"
import { Logo, IconButton } from "../../common"
import routes from "../../../routes"
import { Link } from "react-router-dom"
import clsx from 'clsx'

const Header = () => {
    const [isMobileNavVisible, setMobileNavVisible] = useState(false)
    return (
        <header>
            <div className={styles.header}>
                <Logo />

                <div>
                    <IconButton className={styles.toggleMenu} onClick={() => setMobileNavVisible(!isMobileNavVisible) }>
                        <i className="fa-solid fa-bars"></i>
                    </IconButton>
                <nav>
                    <ul className={clsx(styles.navs, !isMobileNavVisible && styles.hide)}>
                        {
                            routes.filter(r => r.displayName).map(r => <li key={r.path}>
                                <Link to={r.path} onClick={() => setMobileNavVisible(false)}>{r.displayName}</Link>
                            </li>)
                        }
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header