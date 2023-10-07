function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 10 && day < 10) {
    return `0${day}.0${month}.${year}`;
  } else if (month < 10 && day >= 10) {
    return `${day}.0${month}.${year}`;
  } else {
    return `${day}.${month}.${year} `;
  }
}

export default formatDate;
