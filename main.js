// Importing JSON files
const contacts = require("./db/contactList.json")
const evaluations = require("./db/evaluations.json")
// Importing modules
const evaluate = require("./modules/evaluate")
const makeJSON = require("./modules/makeJSON")

const updatedContact = []
main()

function main() {
    evaluate.evaluateContacts(contacts, updatedContact, evaluations)
    makeJSON.exportToJSON("ratedContacts.json", updatedContact)
}