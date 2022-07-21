const returnFirstTwoDrivers = function(drivers){
    const firstTwoArray = drivers.slice(0, 2);
    return firstTwoArray;
}

const returnLastTwoDrivers = function(drivers){
    const lastTwoArray = drivers.slice(drivers.length-2, drivers.length);
    return lastTwoArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return multiplier * fare;
    };
    
}
function fareDoubler(){
const fareDoubled = createFareMultiplier(2);
return fareDoubled;
}

function fareTripler(){
const fareTripled = createFareMultiplier(3);
return fareTripled;
}

function selectDifferentDrivers(arrayOfDrivers, driverFunction){
    return driverFunction(arrayOfDrivers);}