const formatDate = () => {
  const now = new Date();

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const newDate = (date) => new Date(date);
  const weekIndex = (date) => newDate(date).getDay();
  const monthIndex = (date) => newDate(date).getMonth();
  const dayOfTheWeek = (date) => week[weekIndex(date)];
  const currentMonth = (date) => month[monthIndex(date)];
  const currentDate = (date) => newDate(date).getDate();
  const currentYear = (date) => newDate(date).getFullYear();

  const dayDateMonthYear = (date) => `${dayOfTheWeek(date)}, ${currentDate(date)} ${currentMonth(
    date,
  )} ${currentYear(date)}`;
  const dayDateMonth = (date) => `${dayOfTheWeek(date)}, ${currentDate(date)} ${currentMonth(date)}`;

  const toTime = (date = now) => {
    const hour = newDate(date).getHours();
    const minutes = newDate(date).getMinutes();
    const timePeriods = hour < 12 ? 'AM' : 'PM';
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formatHour = () => {
      const newHour = hour > 12 ? hour - 12 : hour;
      if (newHour < 12) { return `0${newHour}`; }
      return newHour;
    };
    return `${formatHour()}:${formatMinutes} ${timePeriods}`;
  };

  const toFullDate = (date = now) => dayDateMonthYear(date);
  const toFullDateWithTime = (date = now) => `${dayDateMonthYear(date)} - ${toTime(date)}`;

  const toDueDate = (date) => {
    const yearDiff = newDate(date).getFullYear() - now.getFullYear();
    const monthDiff = newDate(date).getMonth() - now.getMonth();
    const dateDiff = newDate(date).getDate() - now.getDate();
    const getDueDate = () => {
      if (yearDiff === -1) {
        return `Last Year - ${dayDateMonthYear(date)}`;
      }
      if (yearDiff < 0) {
        return `${dayDateMonthYear(date)}`;
      }
      if (yearDiff === 0) {
        if (monthDiff === -1) {
          return `Last Month - ${dayDateMonth(date)}`;
        }
        if (monthDiff < 0) {
          return `This Year - ${dayDateMonth(date)}`;
        }
        if (monthDiff === 0) {
          if (dateDiff === -1) {
            return `Yesterday - ${dayDateMonth(date)}`;
          }
          if (dateDiff < 0) {
            return `This month - ${dayDateMonth(date)}`;
          }
          if (dateDiff === 0) {
            return `Today - ${dayDateMonth(date)}`;
          }
          if (dateDiff === 1) {
            return `Tomorrow - ${dayDateMonth(date)}`;
          }
          return `This Month - ${dayDateMonth(date)}`;
        }
        if (monthDiff === 1) {
          return `Next Month - ${dayDateMonth(date)}`;
        }
        return `This Year - ${dayDateMonth(date)}`;
      }
      if (yearDiff === 1) {
        return `Next Year - ${dayDateMonthYear(date)}`;
      }
      return `${dayDateMonthYear(date)}`;
    };

    return getDueDate();
  };

  return { toFullDate, toDueDate, toFullDateWithTime };
};

export default formatDate();
