import React from 'react'
import styled from './Square.module.css'

const Square = ({ value, onClick }) => {
    return (
        <div className={styled.square} onClick={onClick}>{value}</div>
    )
}

export default Square