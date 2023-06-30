const events_db = [{
  "name": "Fabio",
  "id": 1
},
{
  "name": "Maria",
  "id": 2
}];

const getEvents = (request, h) => {
  return events_db;
};

const getEventById = (request, h) => {
  console.log(request.params);
  return events_db;
};

const postEvent = (request, h) => {
  events_db.push(request.payload);

  return "Event Created!";
};

module.exports = {
  getEvents,
  postEvent,
  getEventById
};