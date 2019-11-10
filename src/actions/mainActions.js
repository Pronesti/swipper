export const like = () => {
  return {
    type: 'LIKE'
  };
};

export const superLike = () => {
  return {
    type: 'SUPER_LIKE'
  };
};

export const reject = () => {
  return {
    type: 'REJECT'
  };
};

export const setMyself = boolean => {
  return {
    type: 'MYSELF',
    payload: boolean
  };
};
