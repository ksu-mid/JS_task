function avg() {
    let sum = 0
    for (let i = 0; i < arguments[i]; i++) {
        sum += arguments[i]
    }
    return sum == 0 ? sum : sum / arguments.length
}