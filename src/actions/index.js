export function selectBook(book) {
  //selectBook is an ActionCreator
  //it needs to return an action,
  //an object with a tyoe property
  return {
    type: "BOOK_SELECTED", //usually an uppercase label
    payload: book // payload=a piece of data that
    //describes the action that's been undertaken
  };
}
