let arrowLeft = document.getElementsByClassName('arrowLeft')
let arrowRight = document.getElementsByClassName('arrowRight')
let images = document.querySelectorAll(".imgContainer img");
let activeImgs = []

images.forEach((item, i) => {
    if (item.classList.contains('active')) {
        activeImgs.push(i)
    }
})

arrowLeft[0].addEventListener('click', () => {
    if (activeImgs[0] !== 0) {
        arrowRight[0].style.opacity = "1"
        images[activeImgs[activeImgs.length - 1]].classList.remove('active')
        activeImgs.pop()
        images[activeImgs[0] - 1].classList.add('active')
        activeImgs.unshift(activeImgs[0] - 1)
    }
    if (activeImgs[0] === 0) {
        arrowLeft[0].style.opacity = "0.5"
    }
})

arrowRight[0].addEventListener('click', () => {
    if (activeImgs[activeImgs.length - 1] !== images.length - 1) {
        arrowLeft[0].style.opacity = "1"
        images[activeImgs[0]].classList.remove('active')
        activeImgs.shift()
        images[activeImgs[activeImgs.length - 1] + 1].classList.add('active')
        activeImgs.push(activeImgs[activeImgs.length - 1] + 1)
    }
    if (activeImgs[activeImgs.length - 1] === images.length - 1) {
        arrowRight[0].style.opacity = "0.5"
    }
})

if (activeImgs[0] === 0) {
    arrowLeft[0].style.opacity = "0.5"
}

if (activeImgs[activeImgs.length - 1] === images.length - 1) {
    arrowRight[0].style.opacity = "0.5"
}