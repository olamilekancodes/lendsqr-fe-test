export function formatDateTime(input: Date | string | number): string {
  const normalized =
    typeof input === "string"
      ? input.replace(
          /^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})(?:\.\d+)?$/,
          "$1T$2"
        )
      : input;
  const date =
    normalized instanceof Date ? normalized : new Date(normalized as string);
  if (Number.isNaN(date.getTime())) return "";

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const minutesStr = String(minutes).padStart(2, "0");

  return `${month} ${day}, ${year} ${hours}:${minutesStr} ${ampm}`;
}
