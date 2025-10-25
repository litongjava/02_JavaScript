let date=new Date();
console.log(date.getTime());

date.setSeconds(date.getSeconds() + 1); // Add one second

// Format the date into YYYY-MM-DD HH:MM:SS
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
let day = String(date.getDate()).padStart(2, '0');
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let seconds = String(date.getSeconds()).padStart(2, '0');

utcTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(utcTime);