

const nameList = {
    name: 'Sagor Biswas',
    company: 'Programming Hero',
    designation: 'Web Developer',
    show: 'The Office',
};

let count = 0;


for (let key in nameList) {

    count++;
}

console.log(count);