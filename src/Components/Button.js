import styled from './Button.module.css'

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styled.button}>Reset</button>
    )
}

export default Button