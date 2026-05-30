function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function updateCalc() {
    const cups = document.getElementById('cups').value;
    const ratio = document.getElementById('strength').value;
    
    document.getElementById('cups-display').textContent = cups + (cups == 1 ? ' cup' : ' cups');
    
    const coffeeGrams = Math.round(cups * 15);
    const waterGrams = Math.round(coffeeGrams * ratio);
    
    document.getElementById('coffee-g').textContent = coffeeGrams + 'g';
    document.getElementById('water-g').textContent = waterGrams + 'g';
}

function showMethod(method) {
    document.querySelectorAll('.method-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(method).classList.add('active');
    event.target.classList.add('active');
}

let timerInterval;
let timeLeft = 240;

function startTimer(seconds) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Coffee is ready! ☕');
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 240;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById('timer-display').textContent = 
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('click', function() {
        this.style.background = '#d4edda';
        setTimeout(() => {
            this.style.background = '';
        }, 500);
    });
});

updateCalc();
