const { contactInfoService } = require('../services/contact.services');

const contactInfo = async (req, res) => {
    try {
        console.log("API HIT CONTROLLER :::");
        const reqBody = req.body;
        const { name, email, message } = reqBody;
        if (name.length <= 3 || email.length <= 13 || message.length <= 10) {
            res.status(400).send({ status: false, message: "Please fill all Inputs" })
        }
        const result = await contactInfoService(name, email, message)
        if (result) {
            res.status(200).send({ status: true, message: "Message Sent Sucessfully" })
        } else {
            res.status(400).send({ status: false, message: "Something went wrong" })
        }
    } catch (error) {
        console.log("ERROR :::", error);
        res.status(500).send({ status: false, message: "Internal Server Problem" })
    }
}

module.exports = { contactInfo }