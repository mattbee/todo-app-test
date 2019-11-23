export const formattedDate = (options = {}) => {
  const today = new Date();
  return today.toLocaleDateString('en-GB', options);
};

export const isoDate = () => {
  const today = new Date();
  return today.toISOString();
};
