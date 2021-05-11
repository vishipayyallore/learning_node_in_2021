/*
    Concepts: 
        1. process.stdin | 2. process.stdout | 3. process.stderr
*/

console.log(`Enter Name. OR Press "CTRL + C" to EXIT.`);

process.stdin.on('data', (data) => {

    const inputData = data.toString().trim();

    if (inputData !== '') {
        process.stdout.write(`Welcome ${inputData}`);
    } else {
        process.stderr.write("Input was empty.");
    }
    console.log(`\nEnter Name. OR Press "CTRL + C" to EXIT.`);

});
