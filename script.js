function colorIn(event){
    event.target.classList.add('colored');
}

function colorOff(event){
    event.target.classList.remove('colored');
}

const box = document.querySelectorAll('.box');
box.forEach((div)=>{
    div.addEventListener('mouseenter', event =>{
        colorIn(event);
    })
    div.addEventListener('mouseleave', event =>{
        colorOff(event);
    })
});

function gridSizePrompt(){
    let gridSize = prompt("Enter Grid Size");
    const grid = document.querySelectorAll('.rows');
    console.log(grid);
    if (grid.hasChildNodes()) {
        grid.removeChild(grid.children[0]);
      }
    
}

const gridSizeButton = document.querySelector('.gridsize');
gridSizeButton.addEventListener('click',()=>{
    gridSizePrompt();
});