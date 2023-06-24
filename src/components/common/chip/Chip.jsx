
const getStyles = styles => ({
    display: 'inline-block',
    fontSize: '12px',
    background: 'var(--secondary-color-1)',
    padding: '3px 7px',
    borderRadius: '4px',
    fontWeight: 'bold',
    ...styles
})

const Chip = ({ children, styles }) => {

    return (
        <span style={getStyles(styles)}>
            {children}
        </span>
    )
}

export default Chip