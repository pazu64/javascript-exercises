function getAge (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function(people) {
    let arrAge = people.map(person => getAge(person.yearOfBirth, person.yearOfDeath));
    let old = arrAge.toSorted((a, b) => a - b);
    let personOld = people[arrAge.indexOf(old[people.length - 1])];
    return personOld;
};

// Do not edit below this line
module.exports = findTheOldest;