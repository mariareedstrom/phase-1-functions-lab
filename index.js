const headQ = 42;

function distanceFromHqInBlocks(pickup){
  if (headQ > pickup){
    return headQ - pickup
  } else {
    return pickup - headQ
  }
//  or simplified: Math.abs(headQ - pickup)
}  


function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;
}       



function distanceTravelledInFeet(start, end){
    return Math.abs((end - start) * 264);
}



function calculatesFarePrice(start, end){
    let traveled = distanceTravelledInFeet(start, end);
    let billable = Math.max(0, traveled - 400);
    
    if (traveled <= 400){
      console.log('gives customers a free sample');
      return 0;
    } else if (traveled > 400 && traveled <= 2000) {
      return billable * 0.02;
    } else if (traveled > 2000 && traveled <= 2500){
      return 25;
    } else if (traveled > 2500) {
      return 'cannot travel that far'
    }
}
    

    
    
    
    
