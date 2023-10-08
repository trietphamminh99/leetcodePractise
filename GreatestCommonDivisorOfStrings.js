/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let map = ""
    let out = ""
    for (let i = 0; i < str2.length; i++) {
        if (map.search(str2[i]) == (-1)) {
            map += str2[i]
        }
    }
    if (str1.search(map) >= 0) {
        let k = str1.search(map)
        console.log(k)
        for (k; k < map.length; k++) {
            out += str1[k]
        }
    }

    console.log(map)
    return out
};
let str1 = "LEET"
let str2 = "CODE"
console.log(gcdOfStrings(str1, str2))
