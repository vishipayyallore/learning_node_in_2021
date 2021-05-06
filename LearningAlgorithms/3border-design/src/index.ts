/*
    Description: 
*/

const addBorders = (items: string[]): string[] => {

    const border = '*'.repeat(items[0].length + 4);

    items.forEach((item, index) => { items[index] = `* ${item} *`; });

    items.unshift(border);
    items.push(border);

    return items;
};

const items = ["ABC", "DEF", "GHI"];

addBorders(items)
    .forEach((item) => console.log(item));

