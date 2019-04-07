function DeleteAllEntries(){
    console.log("this works");
    document.getElementById('customerName').value(" ");
}
/*window.onload = function what(){
    document.getElementById('hello').innerHTML = 'hi';
};*/


function AddEntry(){
    var name = document.getElementById("customerName").value;
    const entryTime = new Date();
    var timeNow = new Date();
    var hFixed = entryTime.getHours();
    var mFixed = entryTime.getMinutes();
    var sFixed = entryTime.getSeconds();
    var html , newHtml;
    html='<div class="CoustomerCard"><h4 class="name">%nameOfCustomer%</h4><p class="timeOfEntry">%Time%</p></div><script></script>'
    newHtml = html.replace('%Time%',hFixed +":"+mFixed +":"+sFixed);
    newHtml = newHtml.replace('%nameOfCustomer%',name);
    document.querySelector(".details").insertAdjacentHTML('beforeend',newHtml);

}
function startTime() {
    var today = new Date();
    var days = today.getDate();
    var months = today.getMonth()+1;
    var years = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('current-date').innerHTML =
    days +"/0" + months +"/" + years +"  " + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }








