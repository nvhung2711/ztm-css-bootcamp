// Fetching the riddle and answer from the API
function fetchRiddle() {
    closePanel();
    // Delay fetching by a little more than 0.3s (300ms)
    setTimeout(() => {
        fetch('https://riddles-api.vercel.app/random')
            .then(response => response.json())
            .then(data => {
                if (data.answer.length < 200 && data.riddle.length < 200) {
                  document.getElementById('riddlePlaceholder').textContent = data.riddle;
                  document.getElementById('answerPlaceholder').textContent = data.answer;
                } else {
                  fetchRiddle();
                }
            })
            .catch(error => {
                console.error('Error fetching the riddle:', error);
            });
    }, 350);
}


// Calling the fetchRiddle function on page load to populate the placeholders
document.addEventListener('DOMContentLoaded', fetchRiddle);

// Code for toggling the panels open and closed
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

function togglePanel() {
    if (leftPanel.style.left === '-50%') {
      leftPanel.style.left = '0';
      rightPanel.style.right = '0';
    } else {
      leftPanel.style.left = '-50%';
      rightPanel.style.right = '-50%';
    }
}

function closePanel() {
      leftPanel.style.left = '0';
      rightPanel.style.right = '0';
}