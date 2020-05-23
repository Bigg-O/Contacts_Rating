// JSON file
const contacts = require("./db/contactList.json")
// Modules
const evaluate = require("./modules/evaluate")
const makeJSON = require("./modules/makeJSON")

exports.main = () => {
    const fileName = "ratedContacts.json"
    const ratedContact = evaluate.evaluateContacts(contacts)

    makeJSON.exportToJSON(fileName, ratedContact)
}