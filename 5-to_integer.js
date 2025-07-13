const arg = process.argv[2]  // To get the first argument passed to the script
const number = parseInt(arg); // Try converting it to a number
if (isNaN(number)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${number}`);
}