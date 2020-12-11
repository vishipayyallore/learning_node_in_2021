/*
 _events: [Object: null prototype] {
    end: [ ],
    pause: [],
    data: [],
    keypress: []
  }
*/

process.stdout.write('Please enter valid name: ');

process.stdin.on('data', (data) => {

    const name = data.toString().trim().toUpperCase();

    if (name !== '') {

        process.stdout.write(`Hello ${name}!`);
        process.stdout.write(`\n\nPress (Ctrl + C) to quit!\n`);
    } else {
        process.stderr.write('Invalid name');
    }

});
