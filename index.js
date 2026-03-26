// index.js

// Attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

/**
 * Logs the name of the attendee.
 * @param {Object} person - The attendee object.
 */
function logAttendeeName(person) {
  console.log(person.name);
}

/**
 * Logs the ticket price of the attendee.
 * @param {Object} person - The attendee object.
 */
function logTicketPrice(person) {
  console.log(person.ticketPrice);
}

/**
 * Updates the ticket type of the attendee.
 * @param {Object} person - The attendee object.
 * @param {string} newType - The new ticket type.
 */
function updateTicketType(person, newType) {
  person.ticketType = newType;
}

/**
 * Updates the ticket price of the attendee.
 * @param {Object} person - The attendee object.
 * @param {number} newPrice - The new ticket price.
 */
function updateTicketPrice(person, newPrice) {
  person.ticketPrice = newPrice;
}

/**
 * Removes the event property from the attendee object.
 * @param {Object} person - The attendee object.
 */
function removeEventProperty(person) {
  delete person.event;
}

/**
 * Adds a checkedIn property set to true on the attendee object.
 * @param {Object} person - The attendee object.
 */
function addCheckedInProperty(person) {
  person.checkedIn = true;
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
