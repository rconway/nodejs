var fs = require("fs")

fs.writeFileSync("notes.txt", "Hello, this is a test.")

fs.appendFileSync("notes.txt", "\nsome more.")