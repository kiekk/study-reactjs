const dog = {
    name: '루시'
};

// const cuteDog = {
//     name: '루시',
//     age: 9
// };
const cuteDog = {
    ...dog,
    age: 9
};

// const whiteCuteDog = {
//     name: '루시',
//     age: 9,
//     color: 'white'
// };
const whiteCuteDog = {
    ...cuteDog,
    color: 'white'
};

console.log(dog);
console.log(cuteDog);
console.log(whiteCuteDog);
console.log('-------------------------');

const student = ['김사과', '오렌지', '반하나', '이메론'];
const addStudent = [ ...student, '박수박'];

console.log(student);
console.log(addStudent);