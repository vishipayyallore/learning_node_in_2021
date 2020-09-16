'use strict';

import * as chalk from 'chalk';

export class ApplicationLogger {

    constructor() {
    }

    public logMessageInYellow = async (message: String, bold: boolean = false) => {

        await this.logMessage(message, chalk.yellowBright, bold);
    }

    public logMessageInCyan = async (message: String, bold: boolean = false) => {

        await this.logMessage(message, chalk.cyan, bold);
    }

    public logMessageInBlue = async (message: String, bold: boolean = false) => {

        await this.logMessage(message, chalk.blue, bold);
    }

    public logMessageInGreen = async (message: String, bold: boolean = false) => {

        await this.logMessage(message, chalk.green, bold);
    }

    public logMessageInRed = async (message: String, bold: boolean = false) => {

        await this.logMessage(message, chalk.red, bold);
    }

    private getLogMessage = async (message: String) => {
        
        return `${new Date().toISOString()} :: ${message}`;
    }

    private logMessage = async (message: String, color: chalk.Chalk, bold: boolean) => {

        this.getLogMessage(message)
            .then(message => color(message))
            .then(message => {
                return (bold) ?  chalk.bold(message) : message;
            })
            .then(message => console.log(message));
    }


}