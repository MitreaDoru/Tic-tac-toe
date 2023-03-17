import Square from "./Square"
import { useState } from "react"
import styled from './Table.module.css'
import checkPlayer from "../User/checkPlayer"
import markedTable from "../User/markedTable"
import React from "react"
import Button from "./Button"
const Table = () => {
    const [table, setTable] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('X')
    const [turn, setTurn] = useState(0)

    const markSquare = (square) => {
        if (table[square] === '' && !winner) {
            setPlayer(checkPlayer.player(turn))
            setTable(markedTable.updatedTable(table, square, player))
            setTurn(checkPlayer.checkTurn(turn, table, square))
        }
    }

    const handleReset = () => {
        setTable(Array(9).fill(''))
        setTurn(0)
        setPlayer('X')
    }
    const handleChangePlayer = () => {
        if (player === 'X') {
            setPlayer('O')
            setTurn(1)
        } else {
            setPlayer('X')
            setTurn(0)
        }
    }
    const winner = checkPlayer.checkWinner(table)
    const board = table.map((_, indx) => {

        if (indx === 0 || indx === 3 || indx === 6) {
            return (<div key={indx} className={styled.row}>
                <Square value={table[indx]} onClick={() => { markSquare(indx) }} />
                <Square value={table[indx + 1]} onClick={() => { markSquare(indx + 1) }} />
                <Square value={table[indx + 2]} onClick={() => { markSquare(indx + 2) }} />
            </div>)
        }
        return undefined
    })
    return (
        <div className={styled.max}>
            <div className={styled.current}>
                {winner ? <h2>Winner: {winner}</h2> : <h2>Next turn: {player}</h2>}
                <Button onClick={handleReset} value='Reset' />
                <Button onClick={handleChangePlayer} value='Change' />
            </div>
            <div className={styled.board}>
                {board}
            </div>
        </div>
    )
}

export default Table