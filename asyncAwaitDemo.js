const fs = require("fs").promises;

// The async keyword lets us use await inside this function

async function readNotes() {
    console.log("Starting to read Files");

    try {
        const data = await fs.readFile("notes.txt", "utf-8");
        console.log("File Content: " + data);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

async function readNotes1() {
    console.log("Reading Files");

    try {
        const data = await fs.readFile("promises.txt", "utf-8");
        console.log("File Content: " + data);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

async function main() {
    const result1 = readNotes();
    const result2 = readNotes1();

    await Promise.all([result1, result2]);

    console.log("Program Continues");
}

main();

console.log("This line runs before the files finish reading");
