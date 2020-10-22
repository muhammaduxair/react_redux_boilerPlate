export const Action = (name) => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};

// fetching api using redux thunk asynchrounise
//
export const Action2 = () => {
  return async (dispatch) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();
    dispatch({ type: "CHANGE_NAME", payload: res[0].name });
  };
};

export const apiAction = () => {
  return async (dispatch) => {
    const data = await fetch("https://api.covid19api.com/summary");
    const res = await data.json();
    dispatch({ type: "ADD_DATA", payload: res.Countries[127] });
  };
};
