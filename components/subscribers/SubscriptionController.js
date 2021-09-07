'use strict'

const db = require('../../models');
const { default: axios } = require('axios');


const createSubscription = async(req, res) => {
    try {
        const { url } = req.body;
        const { topic } = req.params; 
        await db.Subscriber.create({url: url, topic: topic});
        return res.status(200).send({url: url, topic: topic});
    }catch(error){
        return res.status(500).send(error);
    }
}

const publishMessage = async(req,res) => {
    try {
        const data  = req.body;
        const { topic } = req.params;
        const subscribers = await db.Subscriber.findAll({
            attributes: ['url'],
            where: {
                topic:topic
            }
        });
        for (const subscriber of subscribers) {
            axios.post(subscriber.url, data);
        }
        res.status(200).send("success"); 
    } catch (error) {
        return res.status(500).send(error);
    }
}

const receiveMessage = async(req, res) => {
    try {
        const { subscriber } = req.params;
        const { data } = req.body;
        console.log({subscriber: subscriber, message: data});
        res.status(200).json({message:"success"});
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports = {
    createSubscription: createSubscription,
    publishMessage: publishMessage,
    receiveMessage: receiveMessage,
}

