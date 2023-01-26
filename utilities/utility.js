export function getDurationString(sd, ed) {
  const startString = `${new Date(
    sd.year,
    sd.month - 1,
    sd.date
  ).toLocaleString("default", { month: "long" })} ${sd.year}`;
  let endString = `${new Date(ed.year, ed.month - 1, ed.date).toLocaleString(
    "default",
    { month: "long" }
  )} ${ed.year}`;
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth();
  const currDate = new Date().getDate();
  if (currYear === ed.year && currMonth === ed.month && currDate === ed.date) {
    endString = "Present";
  }
  return `${startString} - ${endString}`;
}

export function getDurationLength(sd, ed) {
  const durationInMonths = Math.round(
    (new Date(ed.year, ed.month - 1, ed.date).getTime() -
      new Date(sd.year, sd.month - 1, sd.date).getTime()) /
      2629746000
  );
  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;
  return { years, months };
}
