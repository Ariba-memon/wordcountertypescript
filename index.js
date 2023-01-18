#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "wordsknow",
        type: "input",
        message: "Hi Enter your words to count and enjoy word counter:"
    },
    {
        type: "name",
        name: "Name",
        message: "Enter Your Name:"
    },
]);
console.log(`Hello there ${answer.Name}Your words counter answer is  ${answer.wordsknow.length}`);
