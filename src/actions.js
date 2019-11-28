export const buy = () => ({ type: 'BUY'});
export const minus = (id) => ({ type: 'INC', payload: id });
export const plus = (id) => ({ type: 'DEC', payload: id });