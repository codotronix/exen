import styles from './form.module.css'
import clsx from 'clsx'

const Button = props => {
    const { type='button', children='Click Me', className='', ...rest } = props
    return (
        <button type={type} className={clsx(styles.button, className)} {...rest}>
            {children}
        </button>
    )
}

export default Button