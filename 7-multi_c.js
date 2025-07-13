const arg = process.argv[2]; // Get to the argument
const number = parseInt(arg); // Convert to integer
if (isNaN(number)) {
    console.log('Missing Number of occurrences');  // check if it is not a number
}
for (let i = 0; i < number; i++) {   // use for loop to print "C is fun" x times
    console.log("C is fun");
}

