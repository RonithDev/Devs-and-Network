const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator")
const keys = document.querySelectorAll(".no")
let preset=0;
function changeDisplay(value)
{
    
    display.innerText +=value;
    display.scrollLeft = display.scrollWidth;
};
function clearDisplay()
{
    display.innerText="";
}
function calculate()
{
    try{
    display.innerText= eval(display.innerText);
    }
    catch(error)
    {
        display.innerText= "ERROR";
    }
}
function changePreset(front) {
    if (front) {
        preset++;
        if (preset > 2) {
            preset = 0;
        }
    } else {
        preset--;
        if (preset < 0) {
            preset = 2;
        }
    }
    
    // Apply color scheme based on current preset value
    if (preset == 0) {
        document.body.style.backgroundColor = "#DAD4EF";
        calculator.style.backgroundColor = "#566368";
        keys.forEach((key),()=>{key.style.backgroundColor = "#C0A9B0";});
    } else if (preset == 1) {
        document.body.style.backgroundColor = "#DEC3BE";
        calculator.style.backgroundColor = "#B9314F";
        keys.forEach((key),()=>{key.style.backgroundColor = "#D5A18E";});
    } else if (preset == 2) {
        document.body.style.backgroundColor = "#B87D4B";
        calculator.style.backgroundColor = "#523A34";
           keys.forEach((key),()=>{key.style.backgroundColor = "#E5B25D";});
    }
}