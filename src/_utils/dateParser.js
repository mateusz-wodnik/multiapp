function dateParser(date = new Date()) {
  const dayTablePL = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return {
    year,
    month,
    day,
    dayTablePL,
  };
}

export default dateParser;
