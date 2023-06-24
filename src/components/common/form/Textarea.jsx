import clsx from 'clsx'
import styles from './form.module.css'

const Textarea = props => {
    const { type="text", value=null, fullwidth, onChange, classes, ...otherProps } = props
    return (
        <textarea 
            type={type} 
            value={value}
            onChange={onChange}  
            className={clsx(classes && classes, styles.input, fullwidth && styles.fullwidth)}
            {...otherProps}
        ></textarea>
    )
}

export default Textarea