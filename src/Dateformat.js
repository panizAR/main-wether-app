import React from "react";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
export default function Dateformat(props) {
  let day = props.data.getDay();
  let hours = addZero(props.data.getHours());
  let min = addZero(props.data.getMinutes());

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
