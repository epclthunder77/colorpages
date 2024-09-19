const allHs = document.querySelectorAll(".changecolor");



function randomRGB() 
{
    const r = Math.floor(Math.random()* 256); 
    const g = Math.floor(Math.random()* 256); 
    const b = Math.floor(Math.random()* 256);
    
    return `rgb(${r},${g},${b})`
}

setInterval(function()
{
    for(let h1 of allHs)
    {
        h1.style.color = randomRGB();
    }

},1000);

