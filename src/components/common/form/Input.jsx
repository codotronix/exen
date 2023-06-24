import clsx from 'clsx'
import styles from './form.module.css'

const Input = props => {
    const { type="text", value=null, onChange, classes, ...otherProps } = props
    return (
        <input 
            type={type} 
            value={value}
            onChange={onChange}  
            className={clsx(classes && classes, styles.input)}
            {...otherProps}
        />
    )
}

export default Input