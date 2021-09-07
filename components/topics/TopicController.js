'use strict'

const db = require('./../../models');


const createTopic = async(req, res) => {
    try 
    {
        const { topic } = req.body
        const response = await db.Topic.create({topic: topic});
        return res.status(200).send(response);
    }catch(error){
        return res.status(500).send(error);
    }
}

module.exports = {
    createTopic: createTopic,
}

