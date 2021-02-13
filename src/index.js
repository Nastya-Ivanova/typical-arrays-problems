exports.min = function min (array = []) {
    return array.length ? array.sort( (item1, item2) => item1 - item2 )[0] : 0;
}

exports.max = function max (array = []) {
    return array.length ? array.sort( (item1, item2) => item1 - item2 )[array.length-1] : 0;
}

exports.avg = function avg (array = []) {
    let total = array.reduce(function(sum, item){
        return sum + item;
    }, 0);
    return total ? total/array.length : 0;
}
