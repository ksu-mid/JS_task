let size = 120;
let unit = "Кб";

function calculateSize(unit) {
    switch (unit) {
        case "Кб":
            size *= 1024
            alert(size)
            break;
        case "Мб":
            size *= 1024 ** 2
            alert(size)
            break;
        case "Гб":
            size *= 1024 ** 3
            alert(size)
            break;
        default:
            alert("Неизвестная единица измерения!")
    }
}