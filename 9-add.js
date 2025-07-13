// get the command line arguments
const arg1 = process.argv[2]; 
const arg2 = process.argv[3];

// convert them into integers
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Define the add(a,b) function
function add(a,b) {
    return a + b;
}

//Print the result
console.log(add(num1, num2));
