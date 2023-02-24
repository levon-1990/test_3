let date = ["date_1", "date_2", "date_3","date_4"];
let el= 0;
let date_index = new Date()

for (let i = 0; i < date.length; i++) {
  let date_span = date[i]
   el = document.getElementById(date_span);
   el.innerHTML = date_index.toLocaleDateString();
}


















