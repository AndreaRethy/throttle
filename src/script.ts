function throttle(func: (...args: any[]) => void, delay: number) {
    let isWaiting: boolean = false
    let timeout: NodeJS.Timeout | null = null
    return (...args: any[]) => {
        if (isWaiting) return;
        
        func(...args);
        isWaiting = true;

        timeout = setTimeout(() => {
            isWaiting = false;
        }, delay);
    };
}

function addNewItem(array: string[], item: string) {
    array.push(item);
}

export { addNewItem, throttle }