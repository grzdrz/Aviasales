/* 2020-10-12T06:31:00.000Z */

function timeToString(hours: number, minutes: number) {
  if (minutes === 6) {
    hours += 1;
    minutes = 0;
  }
  const hoursString = hours.toString().length === 1 ? `0${hours}` : `${hours}`;
  const minutesString = minutes.toString().length === 1 ? `${minutes}0` : `${minutes}`;

  return [
    hoursString,
    minutesString,
  ];
}

export const formateIntervalWithColon = (dateString: string, duration: number) => {
  const startDate = new Date(dateString);
  let startHours = startDate.getUTCHours();
  let startMinutes = startDate.getUTCMinutes();
  const [
    startHoursString,
    startMinutesString,
  ] = timeToString(startHours, startMinutes);
  const startTime = `${startHoursString}:${startMinutesString}`;

  const durationHours = Math.floor(duration / 60 / 24);
  const durationMinutes = duration % 60;

  let finishHours = startHours + durationHours + Math.floor((startMinutes + durationMinutes) / 60 / 24);
  let finishMinutes = (startMinutes + durationMinutes) % 60;
  const [
    finishHoursString,
    finishMinutesString,
  ] = timeToString(finishHours, finishMinutes);
  const finishTime = `${finishHoursString}:${finishMinutesString}`;

  const result = `${startTime} - ${finishTime}`;
  return result;
};

export function formateIntervalWithPostfixes(duration: number): string {
  let hours = Math.floor(duration / 60);
  let minutes = duration % 60;
  const [
    hoursString,
    minutesString,
  ] = timeToString(hours, minutes);

  const result = `${hoursString}ч ${minutesString}м`;
  return result;
}