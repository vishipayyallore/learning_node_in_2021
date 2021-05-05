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
        getMusicTeacher('A', 'Guitar'),
        getCodingTeacher('B', 'Software'),
        getMusicTeacher('A', 'Piano'),
    ];
}

const getCodingTeacher = (name: string, programmingLanguage: string) => {
    return new MusicTeacher({
        name: name,
        category: 'Software',
        programmingLanguage: programmingLanguage
    })
};

const getMusicTeacher = (name: string, instrument: string) => {
    return new MusicTeacher({
        name: name,
        category: 'Music',
        intrument: instrument
    })
};

const isMusicTeacher = (teacher: Teacher): teacher is MusicTeacher => {
    return teacher.category === "Music";
}

console.log(JSON.stringify(getTeachers()));

console.log(JSON.stringify(getTeachers().filter(isMusicTeacher)));

class A {
    public list: Array<this> = new Array<this>();
}

class B extends A { }

const b: B = new B();
console.log(b.list instanceof (new Array<B>()));

const a: A = new A();
console.log(typeof(a.list));