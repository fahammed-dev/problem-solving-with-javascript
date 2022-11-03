const path = 'UDDDUDUU'

function countingValleys(s) {
    let steps = s.split('');
    let valleyCount = 0; // ->0 ->
    let currentSeaLevel = 0; // ->1 ->
    let valleyStatus = false; // -
    steps.forEach((step) => {
        step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
        if (currentSeaLevel < 0 && !valleyStatus) {
            valleyCount++;
            valleyStatus = true;
        } else if (currentSeaLevel >= 0 && valleyStatus) {
            valleyStatus = false;
        }
    });
    return valleyCount;
}
