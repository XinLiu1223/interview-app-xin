export const API_CALL = "API_CALL";

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
