import styles from "./Logo.module.css"

// const getStyles = (size) => ({
//     display: 'inline-block',
//     height: size + 'px',
// })

const Logo = props => {
    const { size=27 } = props
    // const logoUrl = process.env.PUBLIC_URL + "/static/img/exen-logo-500x.png" 
    return (
        <span className={styles.root}>
            <span style={{fontSize: size + 10 }} className={styles.colr1}>&lt;</span>
            <span style={{fontSize: size }} className={styles.colr2}>Exam Encoded</span>
            <span style={{fontSize: size + 10 }} className={styles.colr1}>&gt;</span>
        </span>
        // <div style={getStyles(size)}>
        //     <img 
        //         src={logoUrl}
        //         alt="Exam Encoded Logo" 
        //         style={{height: '100%'}} 
        //     />
        // </div>
    )
}

export default Logo