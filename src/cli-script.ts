import { program } from 'commander';
import { addNewItem, throttle } from './script';

program
  .command('add <item>')
  .description('Add item')
  .action((item: string) => {
    // Initialize array
    let array: string[] = [];

    //Define throttle function
    const throttledAddNewItem = throttle(() => addNewItem(array, item), 1000);

    // Simulate rapid calls
    throttledAddNewItem();
    throttledAddNewItem();
    throttledAddNewItem();
    
  });
  

program.parse(process.argv);
