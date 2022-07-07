import moment from "moment";

// Time and date function
export function dateAndTime(time) {
  return moment(time).format("Do MMMM YYYY HH:mm");
}
