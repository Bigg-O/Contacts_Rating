const evaluations = require("../db/evaluations.json")

const evaluatedContacts = []

exports.evaluateContacts = contacts => {
    for (const contact of contacts) {

        const washedTitle = washTitle(contact.Title)
        const rate = evaluate(washedTitle, contact["Company Size"])

        evaluatedContacts.push({
            "Name" : contact.Name,
            "Company" : contact.Company,
            "Title" : contact.Title,
            "Company Size" : contact["Company Size"],
            "Rate": rate
        })
    }

    return evaluatedContacts
}

// Only keeps letters and numbers
function washTitle(title) {
    return title.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function evaluate(title, size) {
    return 199
}

// 1. title REGEX