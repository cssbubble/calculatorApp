const display = document.querySelector('.display');
const btns = document.querySelectorAll('button');
let mybtn 
let result 

btns.forEach(btn => btn.addEventListener('click', (e) => {
    mybtn = e.target.id
    display.textContent = display.textContent.trim();
    display.textContent += mybtn;
    // display.textContent = mybtn.concat(mybtn)  
}))

function resultFun(){
    result = math.evaluate(display.textContent)
    console.log(result)
    display.textContent = result;
}

function resetAll(){
    display.textContent = ''
}

function del(){
    let screen = display.textContent;
    screen = screen.substring(0, screen.length-1)
    display.textContent = screen

}