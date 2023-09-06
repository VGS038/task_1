
today = new Date();
nextDate = new Date("2024-01-01"); 
console.log(Math.round((nextDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)))