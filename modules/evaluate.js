
exports.evaluateContacts = (contacts, updatedContact, evaluations) => {
    for (const contact of contacts) {

        const washedTitle = washTitle(contact.Name)
        const rate = evaluate(washedTitle, contact["Company Size"])

        updatedContact.push({
            "Name" : contact.Name,
            "Company" : contact.Company,
            "Title" : contact.Title,
            "Company Size" : contact["Company Size"],
            "Rate": rate
        })

    }
}

function washTitle(title) {
    return title
}

function evaluate(title, size) {
    return 199
}

// 1. title REGEX