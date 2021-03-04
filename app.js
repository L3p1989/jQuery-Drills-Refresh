$('#btnSubmit').on('click', (e) => {
    e.preventDefault();
    alert($('#inputTxt').val());
});