import styles from './form.module.css'

const Button = props => {
    const { type='button', children='Click Me', ...rest } = props
    return (
        <button type={type} className={styles.button} {...rest}>
            {children}
        </button>
    )
}

export default Button