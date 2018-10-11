function timeParser(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return {
    hours,
    minutes,
    seconds,
  };
}

export default timeParser;
