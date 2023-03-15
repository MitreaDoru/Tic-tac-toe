const turn = (turn, table, square) => {
    if (table[square] === '') {
        return turn + 1
    } else {
        return turn
    }
}

const checkTurn = {
    turn
}

export default checkTurn