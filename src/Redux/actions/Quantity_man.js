export const Increment = (id) => {
  return {
    type: "+",
    payload: id,
  };
};

export const Decrement = (id) => {
  return {
    type: "-",
    payload: id,
  };
};
