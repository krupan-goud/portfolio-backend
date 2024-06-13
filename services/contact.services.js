const usersModel = require('../models/contact.model');
const { sendEmail } = require('../utils/commonFunction.utils');

async function contactInfoService(name, email, message) {
    try {
        const newContact = new usersModel({ name, email, message });
        const savedContact = await newContact.save();
        await sendEmail(name, email, message)
        return savedContact;
    } catch (error) {
        throw error
    }
}

module.exports = { contactInfoService };