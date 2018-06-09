function decodeString(str) {
    let reversed = str.replace(/\[|]/g, '').split(/([0-9])/).reverse();
    let decoded = [];
    for (let i = 0; i < reversed.length; i++) {
        if (parseInt(reversed[i])) {
            if (!decoded.length) {
                decoded = fillFromEmpty(reversed, i, decoded)
            } else {
                decoded = fillFromNotEmpty(decoded, reversed, i)
            }
        }
    }
    return decoded.join("");
}


function fillFromEmpty(reversed, i, decoded) {
    for (let j = 0; j < reversed[i]; j++) {
        decoded.push(reversed[i - 1]);
    }
    return decoded;
}

function fillFromNotEmpty(decoded, reversed, i) {
    decoded.push(reversed[i - 1])
    let joined = decoded.reverse().join("");
    decoded = [];
    for (let k = 0; k < reversed[i]; k++) {
        decoded.push(joined)
    }
    return decoded;
}