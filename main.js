const fs = require("fs")
// JSON files
const contacts = require("./db/contactList.json")
const evaluations = require("./db/evaluations.json")



// Creating ratedContacts.json if it doesn't exist
function createDB() {
    if (!fs.existsSync("./ratedContacts.json")) {
        fs.writeFile("ratedContacts.json", JSON.stringify([]), err => {
            if (err) {
                console.log("ERROR:", err)
                throw err
            } else {
                console.log("Succesfully created new file ratedConracts.json")
            }
        })
    }
}

// Importing ratedContacts.json
let response = fs.readFileSync("./ratedContacts.json")
let ratedCont = JSON.parse(response)
console.log(ratedCont)

// contacts.forEach( contact => {
//     // const updatedContact = {
//     //     "Name" : contact.Name,
//     //     "Company" : contact.Company,
//     //     "Title" : contact.Title,
//     //     "Company Size" : contact["Company Size"],
//     //     "Rate": 0
//     // }

//     ratedContacts.push("updatedContact")
// })