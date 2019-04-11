function findMatching(drivers, name){
    return drivers.filter(findName => {
        return findName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, name){
    let beginningName = name.length; 
    return drivers.filter(findName => {
        return findName.slice(0, beginningName) === name
    })
}


function matchName(drivers, name) {
    return drivers.filter(findName => {
        return findName.name.toLowerCase() === name.toLowerCase();
    });
}