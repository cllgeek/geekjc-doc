#!/usr/bin/env node

var commander = require('commander');
var appInfo = require('../package');
var geekjcDoc  = require('..');
var log =console.log;
var color = require('chalk');

commander
    .usage('[options]')
    .description('  Simple document generation tool! \n    version: ' + appInfo.version)
    .version(appInfo.version);


commander
    .option("-C, --Create <file>", "Select Directory Makefile.")
    .option("-v", "App version information.")
    .option('-i, init','Init a documentation.')
    .option('-b, build','Markdown produces static pages document.')
    .option('-w, watch','Listener "md" file is automatically generated pages.')
    .option('-s, server','Open local static html server.')
    .option('-c, clean','Clear the generate static files.')
    .option('-t, theme','Choose a theme.')
    .option('-d, deploy','Publish to a gh-pages branch on GitHub.')
    .option('-p, pdf','PDF generation.')

commander
    .on('--help',function(){
        log(chalk.blue('  Examples:'));
        log('')
        log('    $ geekjc-doc init');
        log('    $ geekjc-doc init [path] ');
        log('    $ geekjc-doc init [path] -C ~/geekjc-doc/');
        log('    $ geekjc-doc watch');
        log('    $ geekjc-doc server');
        log('    $ geekjc-doc clean');
        log('    $ geekjc-doc deploy');
        log('    $ geekjc-doc theme');
        log('    $ geekjc-doc -t ~/git/geekjc-doc-theme-slate/');

        log('______   ______  ______  _    __       _   ______ - _____    ______   ______') 
        log('| | ____ | |     | |     | |  / /      | | | |      | | \ \  / |  | \ | |   ')  
        log('| |  | | | |---- | |---- | |-< <   _   | | | |      | |  | | | |  | | | |   ') 
        log('|_|__|_| |_|____ |_|____ |_|  \_\ |_|__|_| |_|____  |_|_/_/  \_|__|_/ |_|____') 
                                                                                      

    })

commander.parse(process.argv);

if (!process.argv[2]) {
    commander.help();
    console.log();
}

geekjcDoc(commander)