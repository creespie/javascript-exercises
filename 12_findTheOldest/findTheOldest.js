const findTheOldest = function(array) {
    const currentYear = new Date();
    const ordered = array.sort((a,b) => {
        if(a.yearOfDeath == undefined){ a.yearOfDeath = currentYear.getFullYear()}
        if(b.yearOfDeath == undefined){ b.yearOfDeath = currentYear.getFullYear()}
        let current = a.yearOfDeath - a.yearOfBirth;
        let next = b.yearOfDeath - b.yearOfBirth;
        return current < next ? 1 : -1;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
