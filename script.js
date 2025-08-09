'use strict';
let gist = Math.trunc(Math.random() * 30 + 1);
let score = 30;
let hiscore = 0; // Declare hiscore here, outside the event listener

document.querySelector('.chack').addEventListener('click', function () {
    const number = Number(document.querySelector('.number').value);
    const gisting = document.querySelector('.gisting');

    if (!number || number == 0) {
        gisting.textContent = '🙍‍♂️ دا ما رقم لاكن';
    } else if (number > gist) {
        gisting.textContent = '📈 كترت المحلبية';
        score--;
    } else if (number < gist) {
        gisting.textContent = '📉 كدا حبة يا حبة';
        score--;
    } else if (number == gist) {
        // When You Win
        gisting.textContent = ' 🎉 قرض على كدا';
        document.querySelector('body').style.backgroundColor = '#e8f5e9';
        document.querySelector('.cog').textContent = gist;
        if (score > hiscore) {
            hiscore = score; // Update hiscore if the current score is higher
            document.querySelector('.hiscore').textContent = hiscore;
        }
    }
    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
    gist = Math.trunc(Math.random() * 30 + 1);
    score = 30;
    document.querySelector('body').style.backgroundColor = '#eeeeee';
    document.querySelector('.score').textContent = score; // Reset score display
    document.querySelector('.cog').textContent = '?'; // Reset the displayed guessed number
    document.querySelector('.gisting').textContent = ''; // Clear the gisting text
});