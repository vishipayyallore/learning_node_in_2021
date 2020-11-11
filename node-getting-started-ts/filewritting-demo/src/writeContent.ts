import * as fs from 'fs';
import * as util from 'util'

const writeFile = util.promisify(fs.writeFile);

function writeContent(fileName: string, data: string) {

    writeFile(`./Data/${fileName}`, data)
        .then(() => {
            console.log('File created successfully');
        })
        .catch(error => {
            console.log(error);
        });
}

export default writeContent;
