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

const gridSizeButton = document.querySelector('.gridsize');
gridSizeButton.addEventListener('click',()=>{
    gridSizePrompt();
});

let j=0; 
const randomColorButton = document.querySelector('#randomcolorbutton');
randomColorButton.addEventListener('click',()=>{
    console.log(j);
    j++;
    console.log(j);
})

function randomColor(event){
    var randomcolor = random_rgb();
}

function random_rgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function colorIn(event){
    console.log(j);
    if (j===1){
        event.target.classList.add('randomcolored');
    }
    else if (j===0){
        event.target.classList.add('colored');
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


