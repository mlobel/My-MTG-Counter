let countEl = document.getElementById("count-el");
let count2El = document.getElementById("count2-el");
let welcomeEl = document.getElementById("welcome-el");
let name = "Nolan"
let greeting = "Welcome back, "
welcomeEl.innerText = greeting + name + "!"
let count = 20;
let count2 = 20;
function increment() {
    count += 1
    countEl.innerText = count 
}
function minus() {
   count -= 1
   countEl.innerText = count
}
function increment2() {
    count2 += 1
    count2El.innerText = count2
}
function minus2() {
   count2 -= 1
   count2El.innerText = count2
}
function reset() {
    count = 20
    countEl.innerText = count
    count2 = 20
    count2El.innerText = count2
    
}