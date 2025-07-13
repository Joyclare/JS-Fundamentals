const arg = process.argv[2];
const size = parseInt(arg); // Convert to integer

if (isNaN(size)) {
    console.log("Missing size");
}
else {
    let row = "";      // Build the square
for (let i = 0; i < size; i++) {
    row += "X";
}

for (let y = 0; y < size; y++) {
    console.log(row);
}
}

