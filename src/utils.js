import moment from "moment";

// Time and date function
export function dateAndTime(time) {
  return moment(time).format("Do MMMM YYYY HH:mm");
}

// delete handler

export const deleteHandler = (id, items, setterFunction) => {
  const nonRemovedItem = items.filter((eachPost) => eachPost.id !== id);
  setterFunction(nonRemovedItem);
};
