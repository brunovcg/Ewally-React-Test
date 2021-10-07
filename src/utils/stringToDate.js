const stringToDate = (string) => {
  let date = new Date(string.substr(0, 10));

  return date;
};

export default stringToDate;
