const textArea = document.getElementById('text-area');
const boldBtn = document.getElementById('btn-bold');
const italicBtn = document.getElementById('btn-italic');
const underlineBtn = document.getElementById('btn-underline');
const leftBtn = document.getElementById('btn-left');
const centerBtn = document.getElementById('btn-center');
const rightBtn = document.getElementById('btn-right');
const justifyBtn = document.getElementById('btn-justify');
const fontSize = document.getElementById('font-size');
const fontColor = document.getElementById('font-color')


// Bold
boldBtn.addEventListener('click', function(){
    textArea.style.fontWeight = 'bold'
})

// italic
italicBtn.addEventListener('click', function(){
    textArea.style.fontStyle = 'italic'
})

// underline
underlineBtn.addEventListener('click', function(){
    textArea.style.textDecoration = "underline"
})

// align left
leftBtn.addEventListener('click', function(){
    textArea.style.textAlign = 'left'
})

// aling center 
centerBtn.addEventListener('click', function(){
    textArea.style.textAlign = 'center'
})

// align-right

rightBtn.addEventListener('click', function(){
    textArea.style.textAlign = 'right'
})

// justify
justifyBtn.addEventListener('click', function(){
    textArea.style.textAlign = 'justify'
})

// font-size

fontSize.addEventListener('click', function(){
    textArea.style.fontSize = fontSize.value + "px"
})

// font color 
fontColor.addEventListener('click', function(){
    const colorValue = fontColor.value;
    textArea.style.color = colorValue;
})

