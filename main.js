const fs = require("fs")

const contacts = require("./db/contactList.json")

const sample = {
    ex: 1233
}

// Exporting a new JSON file into db folder
fs.writeFile("./db/ratedContacts.json", JSON.stringify(sample), err => {
    if (err) {
        console.log("ERROR:", err)
        throw err;
    } else {
        console.log("Succefully Rated Contacts!")
    }
})