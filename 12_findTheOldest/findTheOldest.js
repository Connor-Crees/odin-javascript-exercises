const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = findAge(oldestPerson);
        const currentAge = findAge(currentPerson);
        if(oldestAge < currentAge){
            return currentPerson;
        }
        else{
            return oldestPerson;
        }
    })
};

const findAge = function(person){
    let death = person.yearOfDeath;
    if(!death){
        death = new Date().getFullYear();
    }
    let birth = person.yearOfBirth;
    return (death - birth);
}

// Do not edit below this line
module.exports = findTheOldest;
