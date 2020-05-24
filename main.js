// JSON file
const contacts = require("./db/contactList.json")
// Modules
const evaluate = require("./modules/evaluateMain")
const makeJSON = require("./modules/makeJSON")

module.exports = () => {
    const fileName = "ratedContacts.json"
    const ratedContacts = evaluate(contacts)
    makeJSON(fileName, ratedContacts)
}