exports.evaluateContacts = (contacts, updatedContact, evaluations) => {
    contacts.forEach( contact => {
        updatedContact.push({
            "Name" : contact.Name,
            "Company" : contact.Company,
            "Title" : contact.Title,
            "Company Size" : contact["Company Size"],
            "Rate": 0
        })
    })
}