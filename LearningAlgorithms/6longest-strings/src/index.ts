/*
    Description: 
    values.sort((a, b) => b.localeCompare(a));
    // console.log(`${values}. Longest: ${longestWordLength}`);
*/

const longestStrings = (values: string[]): string[] => {
    const longestWords: string[] = [];

    values.sort((one, two) => (one.length < two.length ? -1 : 1));
    
    let longestWordLength = values[values.length - 1].length;

    values.forEach((word) => {
        if (word.length === longestWordLength) {
            longestWords.push(word);
        }
    });

    return longestWords;
};

console.log(longestStrings(["", "a", "a", "", " "]));
console.log(longestStrings(["aa", "a", "ad", "b"]));
console.log(longestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(longestStrings(["aba", "aa", "ad", "dddd", "vcd", "aba", "abcd"]));
console.log(longestStrings(["eeee", "aba", "aa", "aaaaa", "ad", "dddd", "vcd", "aba", "abcd"]));
console.log(longestStrings(["", "aa", "a", "ad", "b", "ccc", "dddd", "eeeee", "     " ]));
