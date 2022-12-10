// responsive navbar

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


// update date info on page 2

let today = new Date();
let year=today.getFullYear();
let month=today.getMonth();
let date=today.getDate();
let dateText;
let dateCal;
let dateTextHTML=document.getElementById('date-text');

dateText=year+'-'+(month+1)+'-'+date;
dateCal=(year-2022)*365+(month+1-4)*30+(date-1)
dateTextHTML.innerHTML='<b>REMINDER : </b><br>'+'Today is  ' +"<span style='color:grey;font-weight:500;'>"+ dateText +'</span> . <br> It has been '+"<span style='color:grey;font-weight:500;'>"+dateCal+'</span> days since the official first day of the city-wide lockdown.';



// update sidebar on page 2

let sidebar=document.getElementsByClassName('page2-flex-container-div');

for (let i=0; i<sidebar.length;i++){
    sidebar[i].addEventListener('mouseover',function(){
        sidebar[i].style='background-color: lightgray;font-weight: 600;cursor: pointer;';
    },false)
    sidebar[i].addEventListener('mouseout',function(){
        sidebar[i].style='background-color: none;font-weight: 400;';
    },false)
}