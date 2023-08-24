let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let divide = document.getElementById("divide")
let ac = document.getElementById("ac")
let equal = document.getElementById("equal")
let sol = document.getElementsByTagName("h2")[0]
let eqn1 = "" 

one.addEventListener("click",()=>{
    eqn1+=1
    sol.innerHTML =`\n        ${eqn1}\n    `
})
two.addEventListener("click",()=>{
    eqn1+=2
    sol.innerHTML =`\n        ${eqn1}\n    `
})
three.addEventListener("click",()=>{
    eqn1+=3
    sol.innerHTML =`\n        ${eqn1}\n    `
})
four.addEventListener("click",()=>{
    eqn1+=4
    sol.innerHTML =`\n        ${eqn1}\n    `
})
five.addEventListener("click",()=>{
    eqn1+=5
    sol.innerHTML =`\n        ${eqn1}\n    `
})
six.addEventListener("click",()=>{
    eqn1+=6
    sol.innerHTML =`\n        ${eqn1}\n    `
})
seven.addEventListener("click",()=>{
    eqn1+=7
    sol.innerHTML =`\n        ${eqn1}\n    `
})
eight.addEventListener("click",()=>{
    eqn1+=8
    sol.innerHTML =`\n        ${eqn1}\n    `
})
nine.addEventListener("click",()=>{
    eqn1+=9
    sol.innerHTML =`\n        ${eqn1}\n    `
})
zero.addEventListener("click",()=>{
    eqn1+=0
    sol.innerHTML =`\n        ${eqn1}\n    `
})

plus.addEventListener("click",()=>{
    eqn1 +="+"
    sol.innerHTML =`\n        ${eqn1}\n    `
})

minus.addEventListener("click",()=>{
    eqn1+="-"
    sol.innerHTML =`\n        ${eqn1}\n    `
})
divide.addEventListener("click",()=>{
    eqn1+="/"
    sol.innerHTML =`\n        ${eqn1}\n    `
})
multiply.addEventListener("click",()=>{
    eqn1+="*"
    sol.innerHTML =`\n        ${eqn1}\n    `
})
ac.addEventListener("click",()=>{
    eqn1="0"
    sol.innerHTML =`\n        ${eqn1}\n    `
})
equal.addEventListener("click",()=>{
    eqn1= eval(eqn1)
    sol.innerHTML =`\n        ${eqn1}\n    `
})


