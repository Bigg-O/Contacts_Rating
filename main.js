// JSON file
const contacts = require("./db/contactList.json")
// modules
const rateContacts = require("./modules/evaluateMain")
const makeJSON = require("./modules/makeJSON")

module.exports = () => {
    let ratedContacts = rateContacts(contacts)
    ratedContacts = ratedContacts.sort((a,b) => b.Rate - a.Rate)
    
    const fileName = "ratedContacts.json"
    makeJSON(fileName, ratedContacts)
}