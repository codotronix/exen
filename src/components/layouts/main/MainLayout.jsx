import styles from "./MainLayout.module.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { MainContextProvider } from "../../../contexts/MainContext"
import { Notifications } from "../../common"

const MainLayout = props => {
    const { children } = props
    return (
        <MainContextProvider>
            
            {/* <Header /> */}
            <div className={styles.mainLayout}>
                {children}
            </div>
            <Notifications />
            <Footer />

        </MainContextProvider>
    )
}

export default MainLayout