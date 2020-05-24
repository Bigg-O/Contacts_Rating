// module
const EVALUATION_CHART = require("../db/evaluationChart.json")

// returns a rate by evaluating Seniority Level and Company Size
module.exports = (level, size) => {
    if (level) {
        return EVALUATION_CHART.Seniority_Level_Preference_by_Company_Size[size][level]
    } else {
        return null
    }
}