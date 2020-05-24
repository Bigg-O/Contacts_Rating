const evaluations = require("../db/evaluations.json")

const evaluatedContacts = []

exports.evaluateContacts = contacts => {
    for (const contact of contacts) {

        const washedTitle = washTitle(contact.Title)
        const companySize = findCompanySize(contact["Company Size"])
        const seniorityLevel = findSeniorityLevel(washedTitle)

        const rate = evaluate(washedTitle, companySize)

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

// Evaluated from evaluations.json
// returns one of the followings:
// "small", "medium", "large"
function findCompanySize(size) {
    if (size < evaluations.Company_Size.small_max) {
        return "small"
    } else if (size < evaluations.Company_Size.large_min) {
        return "medium"
    } else {
        return "large"
    }
}

// returns seniority level
// One of the followings:
// "executive", "senior", "mid", "mid-entry", "entry"
function findSeniorityLevel(title) {
    return "executive"
}

function evaluate(title, size) {
    return 199
}