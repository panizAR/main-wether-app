export default function Dateformat(props) {
  function addZeronumber(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  let day = props.data.getDay();
  let hours = addZeronumber(props.data.getHours());
  let min = addZeronumber(props.data.getMinutes());

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${daysOfWeek[day]}  ${hours}:${min}`;
}
