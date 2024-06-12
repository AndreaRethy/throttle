export function throttle(func: (...args: any[]) => void, delay: number) {
    let isWaiting: boolean = false
    let waitingInput: any[] | null;
    
    const timeout = () => {
        if (waitingInput == null) {
            isWaiting = false;
        } else {
            func(waitingInput);
            waitingInput = null;
            setTimeout(timeout, delay);
        }
    }

    return (...args: any[]) => {
        if (isWaiting) {
            waitingInput = args;
            return;
        } else {
            func(...args);
            isWaiting = true;

            setTimeout(timeout, delay);
        }
    };
}

export function addNewItem(array: string[], item: string) {
    array.push(item);
}

//export { addNewItem, throttle }