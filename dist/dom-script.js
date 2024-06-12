import {throttle} from './script.js';

// DOM elements
defaultCounter = document.getElementById('default-counter');
throttledCounter = document.getElementById('throttled-counter');

// Listeners
document.addEventListener('mousemove', e => {
    incrementCount(defaultCounter);
    throttledCounter();
})

// Functions
function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}

const throttledCounter = throttle(() => incrementCount(throttledCounter), 500);