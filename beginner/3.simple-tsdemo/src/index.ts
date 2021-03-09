class Teacher {
    name: string;
    category: string;

    constructor(properties: any) {
        this.name = properties.name;
        this.category = properties.category;
    }
}

class CodingTeacher extends Teacher {

    programmingLanguage: string;

    constructor(properties: any) {
        super(properties);
        this.programmingLanguage = properties.programmingLanguage;
    }
}

class MusicTeacher extends Teacher {

    instrument: string;

    constructor(properties: any) {
        super(properties);
        this.instrument = properties.instrument;
    }
}


function getTeachers(): Array<Teacher> {
    return [
        new MusicTeacher({
            name: 'A',
            category: 'Music',
            intrument: 'Guitar'
        }),
        new CodingTeacher({
            name: 'B',
            category: 'Software',
            intrument: 'C#'
        }),
        new MusicTeacher({
            name: 'C',
            category: 'Music',
            intrument: 'Piano'
        }),
    ];
}

const getMusicTeacher = (name, instrument) => {
    return new MusicTeacher({
        
    })
};

const isMusicTeacher = (teacher: Teacher): teacher is MusicTeacher => {
    return teacher.category === "Music";
}

console.log(JSON.stringify(getTeachers()));

console.log(JSON.stringify(getTeachers().filter(isMusicTeacher)));