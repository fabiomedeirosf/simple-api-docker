const { postEvent, getEvents, getEventById } = require("./controllers/events");
const schema = require("./schemas/events.schema");
const Joi = require('joi');

const router = [
    {
      method: "GET",
      path: "/",
      handler: (request, h) => {
        return "Hello World!";
      }
    },
    {
        method: "POST",
        path: "/post_event",
        options: {
          handler: postEvent,
          validate: schema.event
        }
      },
      {
        method: "GET",
        path: "/events_list",
        handler: getEvents
      },
      {
        method: "GET",
        path: "/events_list/{id}",
        options: {
          handler: getEventById,
          validate: schema.getEventById
        }
      }
  ];
  
  module.exports = router;