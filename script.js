let counter = document.getElementById('counter')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')

let num = 0
counter.textContent = num

decrease.addEventListener('click', ()=>{
    num -= 1
    color(num)
    counter.textContent = num
})

reset.addEventListener('click', ()=>{
    num = 0
    color(num)
    counter.textContent = num
})

increase.addEventListener('click', ()=>{
    num += 1
    color(num)
    counter.textContent = num
})

function color(n){
    if(n == 0){
        counter.style.color = 'black'
    }else if(n > 0){
        counter.style.color = 'green'
    }else{
        counter.style.color = 'red'
    }
}