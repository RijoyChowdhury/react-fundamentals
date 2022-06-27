// currying function with the order being
// store => next => action
export const customMiddleware = (store) => (next) => (action) => {
  // console.log('Middleware triggered:', action);
  next(action);
};
