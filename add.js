const nameList =
{
    name: 'Sagor Biswas',
    company: 'Programming Hero',
    designation: 'Web Developer',
    show: 'The Office',
}

//newObj = { ...nameList, partner: 'Gias Uddin' }
nameList.location = "ctg";
let p = "id"
nameList[p] = 1;
//nameList.id = nameList.id + 1;
nameList["id"] = nameList[p] + 1;

console.log(nameList);