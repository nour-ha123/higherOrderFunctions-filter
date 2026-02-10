function filter (array ,  func) {
    var result = []
    each(array , function (el , i) {
    if (func(el , i )) {
    result.push(el)
        }})
     return result 
}

// ex1
function  nombresPairs (nombres) {
    return filter (nombres , function (el) {
        return el % 2 === 0
    })
}

// ex2
function  multiplesDeTrois (nombres) {
    return filter (nombres , function (el) {
        return el % 3 === 0
    })
}

// ex3
function  nombresPositifs (nombres) {
    return filter (nombres , function (el) {
        return el > 0
    })
}

// ex4
function longueurPaire(chaines) {
    return filter (chaines , function (el) {
        return el.length % 2 === 0
    })
}

// Plus de pratique
// ex1
function nombresImpairs(nombres) {
    return filter (nombres , function (el) {
        return el % 2 !== 0
    })
}

// ex2
function nombresNegatifs(nombres) {
    return filter (nombres , function (el) {
        return el < 0
    })
}

// ex3
function superieursASix(nombres) {
    return filter (nombres , function (el) {
        return el > 6
    })
}

// ex4
function commenceParCaractere(chaines, caractere) {
    return filter (chaines , function (el) {
        return el[0] === caractere
    })
}

// ex5
function indexPairEtLongueurPaire(chaines) {
    return filter (chaines , function (el, i) {
        return i % 2 === 0 && el.length % 2 === 0;
    })
}

// ex6
function deplacerZeros(nombres) {
    var tab1 = filter (nombres , function (el) {
        return el !== 0;
    })
    var tab2 = filter (nombres , function (el) {
        return el === 0;
    })
    return tab1.concat(tab2)
}