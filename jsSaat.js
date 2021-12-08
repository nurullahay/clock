let fullName = prompt("İsminiz Nedir?")
let isim = document.querySelector("#isim")

isim.innerHTML ="Hoşgeldin "+ `${ isim.innerHTML} ${fullName}`


 

setInterval(digitalSaat, 1000)

function digitalSaat(){
    let now = new Date();
    let hr = now.getHours();
    let mn = now.getMinutes();
    let sc = now.getSeconds();
    let dy = now.getDate();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let mon = months[now.getMonth()];
    let yr = now.getFullYear();
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let di = days[now.getDay()];

    hr = (hr<10)? "0"+hr:hr;
    mn = (mn<10)? "0"+mn:mn;
    sc = (sc<10)? "0"+sc:sc;

    let time = hr+":"+mn+":"+sc;
    let hour = document.getElementById("hour").innerHTML=time;

    dy = (dy<10)? dy:dy;
    let date = dy +" "+mon+" "+yr+" "+di;
    let date2 = document.getElementById("date").innerHTML=date;
}