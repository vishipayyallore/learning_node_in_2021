/*
    1. Don't use fs.appendFile if you need to write to a file often.
    2. Use fs.appendFile for occasional writes.
    3. Don't use fs.writeFile (or fs.write) to write a large amount of data or
         when dealing with large files. Use writable streams instead.
*/

import writeContent from './writeContent';

const fileContent = `
This is the sample file. This is second line.
This is the sample file. This is second line.
This is the sample file. This is second line.
This is the sample file. This is second line.
This is the sample file. This is second line.
This is the sample file. This is second line.
`;

writeContent('firstfile.txt', fileContent);
