import { addNewItem, throttle } from '../src/script';

test('It should execute only once, only first event', () => {
    let array: string[] = [];

    jest.useFakeTimers()

    const throttledAddNewItem = throttle(() => addNewItem(array, 'done'), 1000);

    throttledAddNewItem();
    throttledAddNewItem();
    throttledAddNewItem();

    jest.advanceTimersByTime(1000);

    expect(array).toEqual(['done']);
});