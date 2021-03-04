//grab #btnSubmit
const btnSubmit = $('#btnSubmit');
//grab #inputTxt
const inputTxt = $('#inputTxt');
//disable btnSubmit by default
btnSubmit.attr('disabled', true);
//enable btnSubmit on keyup
inputTxt.on('keyup', () => {
    btnSubmit.attr('disabled', false);
})
//on click prevent clearing of form, alert current value of inputTxt, clear that value, and then disable btnSubmit
btnSubmit.on('click', (e) => {
    e.preventDefault();
    alert(inputTxt.val());
    inputTxt.val('');
    btnSubmit.attr('disabled', true);
});
//Create div#myDiv and append to body
$('body').append('<div id="myDiv"></div>');