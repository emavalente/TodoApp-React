export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add-todo":
      return [...initialState, action.payload];
      break;

    case "[TODO] remove-todo":
      const newUpdatedState = initialState.filter(
        (todo) => todo.id !== action.payload
      );
      return newUpdatedState;
      break;

    case "[TODO] toogle-todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done, // para que haga el toogle
          };
        }
        return todo;
      });
      break;

    default:
      return initialState;
      break;
  }
  return initialState;
};
