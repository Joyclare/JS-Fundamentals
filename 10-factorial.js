// get the command line arguments
const arg = process.argv[2];

// convert to an integer
const num = parseInt(arg);

//Define the recursive factoral(n)
function factorial(n) {
    if (n<= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Handle the NaN input
if (isNaN(num)) {
    console.log(1);
} else{
    console.log(factorial(num));
}