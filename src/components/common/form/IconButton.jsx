import styles from './form.module.css'
import clsx from 'clsx'

const IconButton = props => {
    const { type='button', children='X', className='', ...rest } = props
    return (
        <button type={type} className={clsx(styles.iconBtn, className)} {...rest}>
            {children}
        </button>
    )
}

export default IconButton