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

btnSubmit.on('click', (e) => {
    e.preventDefault();
    alert(inputTxt.val());
    inputTxt.val('');
    btnSubmit.attr('disabled', true);
});