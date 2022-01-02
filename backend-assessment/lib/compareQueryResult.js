const isEqual = require("lodash.isequal")

const compareQueryResult = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    // let a1 = JSON.stringify(arr1)
    // console.log(a1)
    // let a2 = JSON.stringify(arr2)
    // console.log(a2)

    return isEqual(arr1, arr2)
}


module.exports = compareQueryResult