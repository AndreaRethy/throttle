// DOM elements
defaultCounter = document.getElementById('default-counter');
throttledCounter = document.getElementById('throttled-counter');

// Listeners
document.addEventListener('mousemove', e => {
    incrementCount(defaultCounter);
    throttlingCounter();
})

// Functions
function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}

function throttle(func, delay) {
    var isWaiting = false;
    var waitingInput;
    var timeout = function () {
        if (waitingInput == null) {
            isWaiting = false;
        }
        else {
            func(waitingInput);
            waitingInput = null;
            setTimeout(timeout, delay);
        }
    };
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isWaiting) {
            waitingInput = args;
            return;
        }
        else {
            func.apply(void 0, args);
            isWaiting = true;
            setTimeout(timeout, delay);
        }
    };
}

const throttlingCounter = throttle(() => incrementCount(throttledCounter), 500);