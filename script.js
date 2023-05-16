const grid = document.querySelector('.grid');

function gridSizePrompt(){
    let gridSize = prompt("Enter Grid Size");
    if (gridSize>100){
        alert("Grid size must be under 100. Try again!")
    }
    else if (isNaN(gridSize)){
        alert("Grid size must be a number. Try again!")
    }
    else {
        const rowsArray = Array.from(document.querySelectorAll('.rows'));
        rowsArray.forEach((div)=>div.remove())
        for(let i=1;i<=gridSize;i++){
            const rowsCreate = document.createElement('div');
            rowsCreate.classList.add('rows');
            grid.appendChild(rowsCreate);
            for(let i=1;i<=gridSize;i++){
                const boxCreate = document.createElement('div');
                boxCreate.classList.add('box');
                rowsCreate.appendChild(boxCreate);
            }
        }
        const boxSelect = document.querySelectorAll('.box');
        boxSelect.forEach((div)=>{
            div.addEventListener('mouseenter', event =>{
                colorIn(event);
            })
            div.addEventListener('mouseleave', event =>{
                colorOff(event);
            })
        });
    }
}

// grid size button

const gridSizeButton = document.querySelector('.gridsize');
gridSizeButton.addEventListener('click',()=>{
    gridSizePrompt();
});

let j=0; // to toggle between on and off for color button
const randomColorButton = document.querySelector('#randomcolorbutton');
randomColorButton.addEventListener('click',()=>{
    j++;
    if (j%2!=0){
    randomColorButton.textContent="Random Colors: On";
    }
    else{
        randomColorButton.textContent="Random Colors: Off"
    }
})

// not sure
function randomColor(event){
    var randomcolor = random_rgb();
}
// function for random rgb values
function random_rgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


// hover function
function colorIn(event){
    if (j%2!=0){
        event.target.classList.add('randomcolored'); //for random colors
    }
    else {
        event.target.classList.add('colored'); //defaul color
    }
}

function colorOff(event){
    event.target.classList.remove('colored');
    event.target.classList.remove('randomcolored');
}

const boxSelect = document.querySelectorAll('.box');
boxSelect.forEach((div)=>{
    div.addEventListener('mouseenter', event =>{
        colorIn(event);
    })
    div.addEventListener('mouseleave', event =>{
        colorOff(event);
    })
});


