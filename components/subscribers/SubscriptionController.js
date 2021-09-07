'use strict'

const db = require('../../models');
const { default: axios } = require('axios');


const createSubscription = async(req, res) => {
    try {
        const data = {url: req.body.url, topic: req.params.topic};
        const subscription = await db.Subscriber.create(data);
        if(subscription) return res.status(200).send(data);
        return res.send(400).send(subscription);
    }catch(error){
        console.log(error);
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
            console.log("subscribersubscribersubscribersubscribersubscriber",data);
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
        res.status(200).send("success");
    } catch (error) {
        console.log("error",error);
        return res.status(500).send(error);
    }
}

module.exports = {
    createSubscription: createSubscription,
    publishMessage: publishMessage,
    receiveMessage: receiveMessage,
}

