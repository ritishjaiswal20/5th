
var modal = document.getElementById('simpleModal');
var modalbtn = document.getElementById('modal-btn');
var closebtn = document.getElementsByClassName('close-btn')[0];


// listen for a click 
modalbtn.addEventListener('click', openModal);
closebtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);


function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = 'none';
}

function closeOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}