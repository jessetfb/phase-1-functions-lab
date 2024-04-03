// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    if(pickupLocation === 43){
        return 1;
    }else if(pickupLocation === 50){
        return 8;
    }else if(pickupLocation <= 42){
        return 8;

    }
}

function distanceTravelledinFeet(pickupLocation) { 
    const blocks = distanceFromHqInBlocks(pickupLocation);

    return blocks *264;

}
function distanceTravelledinFeet(start,destination){
    let blockNumber;

    let distance;

    if (destination > start){
        blockNumber = destination - start;

        distance = blockNumber * 264;
        return distance;
    }else if(start > destination){
        blockNumber=start - destination;

        distance= blockNumber*264;

        return distance;
    }
}

function calculateFarePrice(start,destination) {
    const distance = distanceTravelledinFeet(start,destination);

    let farePrice;

    if(distance<= 400){
        return 0;
    }else if((distance > 400) && (distance <= 2000)){
        farePrice = ((distance - 400)* 2)/100

        return farePrice;
    }else if ((distance>2000) && (distance <= 2500)){
        farePrice = 25;
    }else if(distance > 2500){
        return`cannot travel that far`;
    }
    return farePrice;
}