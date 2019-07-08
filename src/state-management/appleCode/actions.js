export const API_CALL = "API_CALL";

// this is the curry fucntion, fat arrow function is the curry
// return an function, in addition to pass in the dispatch callback
// and then inside the .then in the data=> callback function is to
// execute the dispatch callback to dispatch the actionCreator
// otherwise if without the dispatch, actionCreator just returns
// the obj, redux will not know it, the action
export const appleApiCall = () => dispatch => {
  fetch("./mock-data/mock.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(response => {
      console.log("response from action:", response);
      return response.json();
    })
    .then(data => {
      console.log("data from action:", data);
      dispatch({
        type: API_CALL,
        payload: data
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
