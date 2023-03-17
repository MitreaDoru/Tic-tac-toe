import styled from './Button.module.css'

const Button = ({ onClick, value }) => {
    return (
        <button onClick={onClick} className={styled.button}>{value}</button>
    )
}

export default Button