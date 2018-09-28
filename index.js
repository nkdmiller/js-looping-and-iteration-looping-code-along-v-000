
function printBadges(array){
  for (let count = 0; count < array.length; count++)
  {
    console.log("Welcome " + array[count] + "! You are employee #" + (count+1) + ".");
    
  }
  return array;
}

function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5){
    tails++;
    
  } 
  console.log( "You got " + tails + )
}

