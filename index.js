// index.js

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logAttendeeName(attendeeObj) {
  console.log(attendeeObj.name);
}

function logTicketPrice(attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

function updateTicketType(attendeeObj, newType) {
  attendeeObj.ticketType = newType;
}

function updateTicketPrice(attendeeObj, newPrice) {
  attendeeObj.ticketPrice = newPrice;
}

function removeEventProperty(attendeeObj) {
  delete attendeeObj.event;
}

function addCheckedInProperty(attendeeObj) {
  attendeeObj.checkedIn = true;
}

module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};
