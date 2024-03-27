
function distanceFromHqInBlocks(blockNumber) {
    const hqBlockNumber = 42; 
    return Math.abs(blockNumber - hqBlockNumber);
  }

  function distanceFromHqInFeet(blocks) {
    const hqBlock = 42;
    const feetPerBlock = 264; 
    return Math.abs(blocks - hqBlock) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    return Math.abs(start - destination) * feetPerBlock;
  } 

  function calculatesFarePrice(start, destination) {
    return 0;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(start - destination) * feetPerBlock;
    const freeFeet = 400;
    const ratePerFoot = 0.02; 
  
    if (distanceInFeet <= freeFeet) {
      return 0; 
    } else if (distanceInFeet > freeFeet && distanceInFeet <= 2000) {
      return (distanceInFeet - freeFeet) * ratePerFoot; 
    }
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; 
    const distanceInFeet = Math.abs(start - destination) * feetPerBlock;
    const flatRateOver2000Feet = 25;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } 
    else if (distanceInFeet > 2000) {
    return flatRateOver2000Feet; 
  } 
  }

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264; // Assuming there are 264 feet per block
  const distanceInFeet = Math.abs(start - destination) * feetPerBlock;
  const flatRateOver2000Feet = 25;
  const maxDistance = 2500;

  if (distanceInFeet <= 400) {
    return 0; // First 400 feet are free
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // Charge 2 cents per foot for the distance between 400 and 2000 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= maxDistance) {
    return flatRateOver2000Feet; // Flat rate for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // Do not allow rides over 2500 feet
  }
}
  