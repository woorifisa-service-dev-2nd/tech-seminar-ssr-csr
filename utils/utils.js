export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;
  return dateString;
}

export const dDay = (startDate, endDate) => {
  const deadlineDate = new Date(deadline.slice(0,4), parseInt(deadline.slice(5,7)) - 1, deadline.slice(8,10));
  const year = deadlineDate.getFullYear();
  const month = ('0' + (deadlineDate.getMonth() + 1)).slice(-2);
  const day = ('0' + deadlineDate.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;
  const today = new Date();
  const dif = Math.floor((deadlineDate.getTime() -  today.getTime()) / 1000 / 60 / 60 / 24) + 1;    
  return dif;
}