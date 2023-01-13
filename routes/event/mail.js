const isAuthenticated = require("../../middleware/isAuthenticated");
var express = require("express");
var router = express.Router();
const isAuthenticated = require("../../middleware/isAuthenticated");

require("dotenv").config();
const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

module.exports = async function (req, res) {
  console.log("Sending an email to all event's participants :", req.params.eventId);
  const event = await Event.findById(req.params.eventId);
  if (event.creator == req.user.id) {
    const msgData = {
      from: `${event.creator.first_name} ${event.creator.last_name} <${req.params.eventId}@no-reply.evemark.fun>`,
      to: event.attendees.map((attendee) => attendee.email),
      subject: `[${event.name}] - ${req.body.subject}`,
      text: req.body.text,
    };
    client.messages
      .create(DOMAIN, msgData)
      .then((msg) => {
        console.log(msg);
        res.status(200).json(msg);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    res.status(401).json({
      error:
        "you are not allowed to send email to the event's participants because you are not the creator of the event",
    });
  }
};
