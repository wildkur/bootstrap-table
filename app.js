function timeFormatter(value, row) {
    let d = new Date(value)
    return d.toLocaleDateString()
}

function cellStyle(value, row, index) {
    console.log(value)
    console.log(row)
    console.log(index)
    var fondoCelda = {
        classes: 'bg-warning'
    }
    if (value > 10000) {
        return fondoCelda
    }
    else{
        return 0
    }

}

// function timeFormatter(value, row) {
//     return new Date(value).toLocaleDateString()
// }