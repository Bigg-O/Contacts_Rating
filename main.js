// JSON file
const contacts = require("./db/contactList.json")
// Modules
const evaluate = require("./modules/evaluateMain")
const makeJSON = require("./modules/makeJSON")

module.exports = () => {
    const fileName = "ratedContacts.json"
    let ratedContacts = evaluate(contacts)
    ratedContacts = ratedContacts.sort((a,b) => b.Rate - a.Rate) 
    makeJSON(fileName, ratedContacts)
}