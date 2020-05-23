const fs = require("fs")

// Create/Update ratedContacts.json
exports.exportToJSON = (fileName, data) => {
    fs.writeFile(fileName, JSON.stringify(data), err => {
        if (err) {
            console.log("ERROR:", err)
            throw err
        } else {
            console.log("Succesfully created new file ratedConracts.json")
        }
    })
}