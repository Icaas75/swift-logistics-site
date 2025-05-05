const menubtn = document.querySelector('.menu')
const menuMargin = document.querySelector('.nav-list')
function show() {
    if (menuMargin.style.right == "-30vw") {
        menuMargin.style.right = "0"
    }
    else {
        menuMargin.style.right = "-30vw"
    }
}