#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const myRandomNumber = Math.floor(Math.random() * 6 + 1);
console.log(chalk.blueBright("WELCOME TO THE NUMBER GUESSING GAME"));
const answers = await inquirer.prompt([
    {
        name: "guessinggame",
        type: "number",
        message: "Enter your guess number from 1-6",
    }
]);
if (answers.guessinggame === myRandomNumber) {
    console.log(chalk.greenBright("congrats your guess is correct you have won $20"));
}
else {
    console.log(chalk.redBright("Opps you lost the Game"));
}
