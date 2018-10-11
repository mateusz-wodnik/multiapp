function dateParser(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return {
    year,
    month,
    day,
  };
}

export default dateParser;
