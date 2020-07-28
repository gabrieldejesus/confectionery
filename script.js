//============================================== Menu ===============================================
function menuToggle() {
    if(document.querySelector('nav').style.display == 'none') {
        document.querySelector('nav').style.display = 'block';
    } else {
        document.querySelector('nav').style.display = 'none';
    }
}
//============================================== Slide Products ===============================================
function slideMenuRight() {
    if(document.getElementById('products').style.marginLeft = '0vw') {
        document.getElementById('products').style.marginLeft = '-100vw';
    }
}
function slideMenuLeft() {
    if(document.getElementById('products').style.marginLeft = '-100vw') {
        document.getElementById('products').style.marginLeft = '0vw';
    }
}
