"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewItem = exports.throttle = void 0;
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
exports.throttle = throttle;
function addNewItem(array, item) {
    array.push(item);
}
exports.addNewItem = addNewItem;
//export { addNewItem, throttle }
