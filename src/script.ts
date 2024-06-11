function throttle(func: (...args: any[]) => void, delay: number) {
    let timeout: NodeJS.Timeout | null = null
    return (...args: any[]) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function addNewItem(array: string[], item: string) {
    array.push(item);
}

export { addNewItem, throttle }