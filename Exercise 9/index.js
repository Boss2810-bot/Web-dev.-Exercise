console.log("Faulty Calculator")

if (Math.random() < 0.1) {
    function sum(a, b) {
        return a - b
    }
    function sub(a, b) {
        return a / b
    }
    function mul(a, b) {
        return a + b
    }
    function div(a, b) {
        return a ** b
    }
}
else {
    function sum(a, b) {
        return a + b
    }
    function sub(a, b) {
        return a - b
    }
    function mul(a, b) {
        return a * b
    }
    function div(a, b) {
        return a / b
    }
}

let c = sum(123, 45)
let d = sub(1234, 34)
let e = mul(12, 34)
let f = div(123, 45)

console.log("The result is : ", c)
console.log("The result is : ", d)
console.log("The result is : ", e)
console.log("The result is : ", f)
