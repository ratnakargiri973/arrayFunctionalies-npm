
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


function average(arr) {
    return sum(arr) / arr.length;
}


function unique(arr) {
    return [...new Set(arr)];
}


function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
}


function first(arr) {
    return arr[0];
}


function last(arr) {
    return arr[arr.length - 1];
}


function max(arr) {
    return Math.max(...arr);
}


function min(arr) {
    return Math.min(...arr);
}


function groupBy(arr, fn) {
    return arr.reduce((acc, curr) => {
        const key = fn(curr);
        if (!acc[key]) acc[key] = [];
        acc[key].push(curr);
        return acc;
    }, {});
}


function partition(arr, fn) {
    return arr.reduce(([pass, fail], elem) => fn(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
}



function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


function average(arr) {
    return sum(arr) / arr.length;
}


function unique(arr) {
    return [...new Set(arr)];
}


function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
}


function first(arr) {
    return arr[0];
}


function last(arr) {
    return arr[arr.length - 1];
}


function max(arr) {
    return Math.max(...arr);
}


function min(arr) {
    return Math.min(...arr);
}


function groupBy(arr, fn) {
    return arr.reduce((acc, curr) => {
        const key = fn(curr);
        if (!acc[key]) acc[key] = [];
        acc[key].push(curr);
        return acc;
    }, {});
}


function partition(arr, fn) {
    return arr.reduce(([pass, fail], elem) => fn(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
}



function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


function average(arr) {
    return sum(arr) / arr.length;
}


function unique(arr) {
    return [...new Set(arr)];
}


function flatten(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
}


function first(arr) {
    return arr[0];
}


function last(arr) {
    return arr[arr.length - 1];
}


function max(arr) {
    return Math.max(...arr);
}


function min(arr) {
    return Math.min(...arr);
}


function groupBy(arr, fn) {
    return arr.reduce((acc, curr) => {
        const key = fn(curr);
        if (!acc[key]) acc[key] = [];
        acc[key].push(curr);
        return acc;
    }, {});
}


function partition(arr, fn) {
    return arr.reduce(([pass, fail], elem) => fn(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
}


export default {
    sum,
    average,
    unique,
    flatten,
    first,
    last,
    max,
    min,
    groupBy,
    partition
};