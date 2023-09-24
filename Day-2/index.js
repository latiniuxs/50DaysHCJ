const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const allCircle = document.querySelectorAll('.circle');
let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    // check if curren active is at maximum
    if (currentActive > allCircle.length) {
        currentActive = allCircle.length
    }
    console.log(currentActive);
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    // check if curren active is at minimum
    if (currentActive < 1) {

        currentActive = 1;
    }
    console.log(currentActive);
    update();
})

function update() {
    allCircle.forEach((allCircle, index) => {
        if (index < currentActive) {
            allCircle.classList.add('active');
        } else {
            allCircle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (allCircle.length - 1) * 100 + '%'
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === allCircle.length) {
        next.disabled = true
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}