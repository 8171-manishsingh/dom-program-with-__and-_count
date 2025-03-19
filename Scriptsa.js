
const h1 = document.getElementById("title")
const first = document.getElementById("first")
const secound = document.getElementById("secound")

const btn1 =document.getElementById("btn1")

btn1.addEventListener("click",() => {
    let first_num =parseInt(first.value)
    let sec_num = parseInt(secound.value)
    let sum = first_num + sec_num;

    h1.innerHTML = "Add of "+"first_num"+"+"+"secound_num"+" "+sum
})
const btn2 =document.getElementById("btn2")

btn2.addEventListener("click",() => {
    let first_num =parseInt(first.value)
    let sec_num = parseInt(secound.value)
    let sub = first_num - sec_num;

    h1.innerHTML = "sub of "+"first_num"+"-"+"secound_num"+" "+sub
})
const btn3 =document.getElementById("btn3")

btn3.addEventListener("click",() => {
    let first_num =parseInt(first.value)
    let sec_num = parseInt(secound.value)
    let mul = first_num * sec_num;

    h1.innerHTML = "mul by  "+"first_num"+"*"+"secound_num"+" "+mul
})
const btn4 =document.getElementById("btn4")

btn4.addEventListener("click",() => {
    let first_num =parseInt(first.value)
    let sec_num = parseInt(secound.value)
    let div = first_num / sec_num;

    h1.innerHTML = "div of "+"first_num"+"/"+"secound_num"+" "+div
})
const btn5 =document.getElementById("btn5")

btn5.addEventListener("click",() => {
    let first_num =parseInt(first.value)
    let sec_num = parseInt(secound.value)
    let moduls = first_num % sec_num;

    h1.innerHTML = "pre of "+"first_num"+"%"+"secound_num"+" "+moduls
})