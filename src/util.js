import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month); // round month prop from decimal to full integer
  const year = dayjs().year(); // current year
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day(); // gets the index of first day of the passed parameter month of the current year

  let currentMonthCount = 0 - firstDayOfMonth;

  // create a calendar matrix with 5 rows and 7 columns
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
