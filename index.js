function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42;
    } else {
        return 42 - street;
    }
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distanceCovered = distanceTravelledInFeet(start, destination);
    if (distanceCovered <= 400) {
        return 0;
    } else if ((distanceCovered > 400) && (distanceCovered <= 2000)) {
        return (distanceCovered - 400) * 0.02;
    } else if ((distanceCovered > 2000) && (distanceCovered <= 2500)) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}