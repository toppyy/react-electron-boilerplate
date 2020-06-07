

const summa = (state = 0, action) => {

    if (action.type=='KASVATA') {
        return state + 1
    }

    return state

}

module.exports = summa