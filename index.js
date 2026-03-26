//Write your code here
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
function getAttendeeSummary(attendeeObj) {
  return `${attendeeObj.name} (${attendeeObj.attendeeId}) - ${attendeeObj.ticketType}`;
}
function applyDiscount(attendeeObj, percent) {
  const discount = (attendeeObj.ticketPrice * percent) / 100;
  attendeeObj.ticketPrice = parseFloat((attendeeObj.ticketPrice - discount).toFixed(2));
}
function cloneAttendee(attendeeObj) {
  return JSON.parse(JSON.stringify(attendeeObj));
}
function hasProperty(attendeeObj, prop) {
  return Object.prototype.hasOwnProperty.call(attendeeObj, prop);
}
function listProperties(attendeeObj) {
  return Object.keys(attendeeObj);
}
function mergeAttendee(attendeeObj, updates) {
  return Object.assign(attendeeObj, updates);
}
function formatCurrency(amount) {
  return Number(amount).toFixed(2);
}
function increasePriceByPercent(attendeeObj, percent) {
  const increase = (attendeeObj.ticketPrice * percent) / 100;
  attendeeObj.ticketPrice = parseFloat((attendeeObj.ticketPrice + increase).toFixed(2));
}
function getPriceWithTax(attendeeObj, taxPercent) {
  return parseFloat((attendeeObj.ticketPrice * (1 + taxPercent / 100)).toFixed(2));
}
function toggleCheckedIn(attendeeObj) {
  attendeeObj.checkedIn = !attendeeObj.checkedIn;
}
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty,
  getAttendeeSummary,
  applyDiscount,
  cloneAttendee,
  hasProperty,
  listProperties,
  mergeAttendee,
  formatCurrency,
  increasePriceByPercent, getPriceWithTax,
  toggleCheckedIn
};



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
