export function dateFormat(date: Date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthForm = month >= 10 ? String(month) : "0" + String(month);
  const dayForm = day >= 10 ? String(day) : "0" + String(day);
  return date.getFullYear() + "-" + monthForm + "-" + dayForm;
}
