let count = 0
let countEl = document.getElementById("count-el")

const increment = () => {
    count += 1
    countEl.innerText = count
}

const decrease = () => {
    if(count !== 0) {
        count -= 1
        countEl.innerText = count
    } 
}
