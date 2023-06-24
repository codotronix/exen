import styles from './form.module.css'

const Button = props => {
    const { type='button', children='Click Me' } = props
    return (
        <button type={type} className={styles.button}>
            {children}
        </button>
    )
}

export default Button