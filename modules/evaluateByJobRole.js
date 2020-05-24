const EVALUATION_CHAT = require("../db/evaluationChart.json")

module.exports = (title) => {
    let rate = 1
    rate += addByKeyWords(title, "Job_Role_Preference", Object.keys(EVALUATION_CHAT.Job_Role_Preference))
    rate += addByKeyWords(title, "Bonus_Titles", Object.keys(EVALUATION_CHAT.Bonus_Titles))

    return rate
}



// =========== local-functions ===========



// if a key word is found in title, a set number is added
function addByKeyWords(title, type, words) {
    let add = 0

    for (const word of words) {
        if (title.includes(word)) {
            add += EVALUATION_CHAT[type][word]
            // only gets added point for one role
            if (type === "Job_Role_Preference") {
                break
            }
        }
    }

    return add
}