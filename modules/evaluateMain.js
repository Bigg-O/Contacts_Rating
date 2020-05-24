const EVAULATION_CHART = require("../db/evaluationChart.json")
// modules
const evaluateBySLandCS = require("./evaluateBySeniorityLevelAndCompanySize")
const evaluateByJR = require("./evaluateByJobRole")

// result
const evaluatedContacts = []

module.exports = contacts => {
    for (const contact of contacts) {
        const washedTitle = washTitle(contact.Title)
        const seniorityLevel = getSeniorityLevel(washedTitle)
        const companySize = getCompanySize(contact["Company Size"])

        const rateBySLandCS = evaluateBySLandCS(seniorityLevel, companySize) || 3
        const rateByJR = evaluateByJR(washedTitle)
        const rate = Math.round((rateBySLandCS + rateByJR) / 2)

        contact.Rate = rate
        evaluatedContacts.push(contact)
    }

    return evaluatedContacts
}



// =========== local-functions ===========



// returns string with onlu letters and numbers
function washTitle(title) {
    return title.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

// returns seniority level
// One of the followings:
// "executive", "senior", "mid", "mid-entry", "entry"
function getSeniorityLevel(title) {
    for (const level of Object.keys(EVAULATION_CHART.Seniority_Levels)) {
        for (const key of Object.keys(EVAULATION_CHART.Seniority_Levels[level])) {
            if (title.includes(key)) {
                return level
            }
        }
    }
    return null
}

// Evaluated from evaluations.json
// returns one of the followings:
// "small", "medium", "large"
function getCompanySize(size) {
    if (size < EVAULATION_CHART.Company_Size.small_max) {
        return "small"
    } else if (size < EVAULATION_CHART.Company_Size.large_min) {
        return "medium"
    } else {
        return "large"
    }
}