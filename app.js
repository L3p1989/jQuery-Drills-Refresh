//grab #btnSubmit
const btnSubmit = $('#btnSubmit');
//grab #inputTxt
const inputTxt = $('#inputTxt');
//disable btnSubmit by default
btnSubmit.attr('disabled', true);
//enable btnSubmit on keyup
inputTxt.on('keyup', () => {
    btnSubmit.attr('disabled', false);
});
//random color generator
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};
//on click prevent clearing of form, alert current value of inputTxt, clear that value, and then disable btnSubmit
btnSubmit.on('click', (e) => {
    e.preventDefault();
    //myDiv.append(`<h2 id="rndmTxt">${inputTxt.val()}</h2>`).hover(() => {
    //    $('#rndmTxt').css('background-color', "red");
    //    $('#rndmTxt').css('border-radius', '4px')
    //}, () => {
    //    $('#rndmTxt').css('background-color', 'white');
    //});
    let li = $('<li></li>')
    thisLst.append(li.text(`${inputTxt.val()}`)
    .click(() => {
        li.css('color', `${randomColor()}`)
    })
    .dblclick(() => {
        li.remove()
    })
    )
    inputTxt.val('');
    btnSubmit.attr('disabled', true);
});
//Create div#myDiv and append to body
$('body').append('<div id="myDiv"></div>');
//Grab myDiv
const myDiv = $('#myDiv');
//create ul
$('body').append('<ul id="thisLst"></ul>');
//grab #thisLst
const thisLst = $('#thisLst');