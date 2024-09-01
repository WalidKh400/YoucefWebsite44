// Calculator functions
function appendDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Counter functions
function decreaseCounter(counterId) {
    const counter = document.getElementById(counterId);
    const countSpan = counter.querySelector('.count');
    let count = parseInt(countSpan.textContent);

    if (count > 0) {
        count--;
        countSpan.textContent = count;
        createStarEffect(counter);

        if (count === 0) {
            counter.classList.add('zero'); // Add red background when counter reaches zero
        }
    }
}

function createStarEffect(counter) {
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        counter.appendChild(star);

        // Remove the star after animation
        setTimeout(() => {
            star.remove();
        }, 1000);
    }
}

// Fetch and display Islamic calendar (Hijri) data
function fetchHijriDate() {
    const hijriCalendar = document.getElementById('hijri-calendar');
    const today = new Date();
    // Example Hijri date (replace with actual API or calculation)
    hijriCalendar.textContent = `Today’s Hijri Date: 25 Ramadan 1445`;
}

// Fetch and display prayer times data
function fetchPrayerTimes() {
    const prayerTimes = document.getElementById('prayer-times');
    // Example prayer times (replace with actual API or calculation)
    document.getElementById('fajr-time').textContent = 'Fajr: 05:00 AM';
    document.getElementById('dhuhr-time').textContent = 'Dhuhr: 12:00 PM';
    document.getElementById('asr-time').textContent = 'Asr: 03:30 PM';
    document.getElementById('maghrib-time').textContent = 'Maghrib: 06:45 PM';
    document.getElementById('isha-time').textContent = 'Isha: 08:00 PM';
}

// Draw interactive calligraphy
function drawCalligraphy() {
    const canvas = document.getElementById('calligraphy-canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '40px Arabic Typesetting';
    ctx.textAlign = 'center';
    ctx.fillText('بسم الله الرحمن الرحيم', canvas.width / 2, canvas.height / 2);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchHijriDate();
    fetchPrayerTimes();
    drawCalligraphy();
});