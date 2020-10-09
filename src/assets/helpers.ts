export function formateNumber(number: number) {
  if (number === undefined) return;
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};

export function getHoursAndMinutesWithColon(dateString: string): string {
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const result = `${hours}:${minutes}`;
  return result;
}

export function getHoursAndMinutesIntervalWithPostfixes(duration: number): string {
  const resultHours = Math.floor(duration / 60);
  const resultMinutes = duration % 60;
  const result = `${resultHours}ч ${resultMinutes}м`;
  return result;
}

/* 2020-10-12T06:31:00.000Z */