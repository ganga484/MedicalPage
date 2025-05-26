const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function getYearData(year) {
  return Array.from({ length: 12 }, (_, monthIndex) => {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const firstDay = new Date(year, monthIndex, 1).getDay(); // 0 (Sun) - 6 (Sat)

    const days = [];

    // Padding for first day alignment
    for (let i = 0; i < firstDay; i++) {
      days.push({ isPadding: true });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ day: d, isPadding: false });
    }

    return {
      name: monthNames[monthIndex],
      days
    };
  });
}


export function getWeeksOfYear(year) {
  const weeks = [];
  let date = new Date(year, 0, 1);

  // Adjust to Sunday (start of week)
  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }

  while (date.getFullYear() <= year || (date.getFullYear() === year + 1 && date.getMonth() === 0)) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push({
        date: new Date(date),
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        year: date.getFullYear(),
        isCurrentYear: date.getFullYear() === year,
      });
      date.setDate(date.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}








