const updatedTable = (table, square, player) => {
    const newTable = table.map((val, index) => {
        if (square === index && val === '') {
            return player
        }
        return val
    })
    return newTable
}

const markedTable = {
    updatedTable
}

export default markedTable