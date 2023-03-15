const player = (turn) => {
    if (turn % 2 !== 0) {
        return 'X'
    } else {
        return 'O'
    }
}

const checkWinner = (table) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let winner;
    lines.forEach(line => {
        const [a, b, c] = line
        if (table[a] && table[a] === table[b] && table[a] === table[c]) {
            winner = table[a]
        }
        return null
    })
    return winner
}

const checkTurn = (turn, table, square) => {
    if (table[square] === '') {
        return turn + 1
    } else {
        return turn
    }
}
const checkPlayer = {
    player,
    checkTurn,
    checkWinner,
}

export default checkPlayer