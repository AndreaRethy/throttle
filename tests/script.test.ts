import { addNewItem, throttle } from '../src/script';

describe('It should execute only once, 1s after the last call', () => {
    let array: string[] = [];
    const throttledAddNewItem = throttle(() => addNewItem(array, 'done'), 1000);
    throttledAddNewItem();
    jest.advanceTimersByTime(1000);
    expect(array).toEqual(['done']);
});