'use strict'

const db = require('./../../models');


const createTopic = async(req, res) => {
    try 
    {
        const data = req.body
        const topic = await db.Topic.create({topic: data.topic});
        return res.status(200).send(topic);
    }catch(error){
        return res.status(500).send(error);
    }
}

module.exports = {
    createTopic: createTopic,
}

