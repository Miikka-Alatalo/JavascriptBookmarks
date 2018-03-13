const http = require('http');
const weekdays = ["","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai",""];
const todayN = new Date().getDay();
let todayD;


http.get('http://www.amica.fi/modules/json/json/Index?costNumber=3121&language=fi', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    printWholeMenu(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

const printDayMenu = (day) => {
  day.SetMenus.forEach(menu => {
    console.log("\t",menu.Name);
    menu.Components.forEach(food => {
      console.log("\t\t",food);
    });
    console.log("")
  });
};

const printWholeMenu = (menu) => {
  menu.MenusForDays.forEach(day => {
    const dayN = new Date(day.Date).getDay();
    if(dayN == 0 || dayN == 6) return;
    if(dayN == todayN) todayD = day;
    console.log(weekdays[dayN])
    printDayMenu(day);
  });
  console.log("\n\n");
  console.log(weekdays[todayN])
  todayD && printDayMenu(todayD);
};
