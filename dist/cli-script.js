"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var script_1 = require("./script");
commander_1.program
    .command('add <item>')
    .description('Add item')
    .action(function (item) {
    // Initialize array
    var array = [];
    //Define throttle function
    var throttledAddNewItem = (0, script_1.throttle)(function () { (0, script_1.addNewItem)(array, item); console.log(array); }, 1000);
    // Simulate rapid calls
    throttledAddNewItem();
    throttledAddNewItem();
    throttledAddNewItem();
});
commander_1.program.parse(process.argv);
