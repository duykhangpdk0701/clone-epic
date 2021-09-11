const getCurrentDate = () => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  return date;
};

module.exports = getCurrentDate;
