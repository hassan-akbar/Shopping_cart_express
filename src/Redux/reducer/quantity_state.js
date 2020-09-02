export const quantity_reducer = (state = [], action) => {
  debugger;
  switch (action.type) {
    case "+":
      return state + action.payload;
    case "-":
      return state - action.payload;
    default:
      return state;
  }
};

export default quantity_reducer;
