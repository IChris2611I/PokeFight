function Button({children, onAttack}) {
    return(
        <button onClick={onAttack}>{children}</button>
    )
}

export default Button;