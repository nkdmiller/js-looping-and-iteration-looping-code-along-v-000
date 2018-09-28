
function printBadges(array){
  for (let count = 0; count < array.length; count++)
  {
    console.log("Welcome " + array[count] + "! You are employee #" + (count+1) + ".");
    
  }
  return array;
}

function tailsNeverFails() {
  let tails = 0;
  if (Math.random() >= 0.5){
    tails++;
  }else{
    return tails;
  } 
  
}