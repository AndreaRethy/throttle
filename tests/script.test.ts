import { addNewItem, throttle } from '../src/script';

test('It should execute once immediately and after 1s execute again', () => {
    let array: string[] = [];

    jest.useFakeTimers();

    const throttledAddNewItem = throttle(() => addNewItem(array, 'done'), 1000);

    throttledAddNewItem();
    throttledAddNewItem();
    throttledAddNewItem();

    jest.advanceTimersByTime(1000);

    expect(array).toEqual(['done', 'done']);
});