function words(n = 0) {
    let str = n.toString()
    let arr = str.split('')
    let reverse = arr.reverse()
    let end = reverse[0]
    if (reverse.length > 1) {
        let end2 = reverse[0].toString() + reverse[1].toString()
        if (end == 0) {
            alert(`${n} товаров`)
        } else if (end >= 2 && end <= 4 && end2 != 21 && end2 != 31 && end2 != 41) {
            alert(`${n} товара`)
        } else if (end == 1 && end2 != 11) {
            alert(`${n} товар`)
        } else {
            alert(`${n} товаров`)
        }
    } else if (end == 0) {
        alert(`${n} товаров`)
    } else if (end >= 2 && end <= 4) {
        alert(`${n} товара`)
    } else if (end == 1) {
        alert(`${n} товар`)
    } else {
        alert(`${n} товаров`)
    }
}