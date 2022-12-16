const fullNameInput= document.getElementById("fullName");
const phoneInput=document.getElementById("phone");
const saveBtn=document.getElementById("saveBtn");
const listPeople= document.getElementById("listPeople")
const search = document.getElementById("search")
var people= []
saveBtn.addEventListener("click",function(){ if( fullNameInput.value===''|| phoneInput.value=== '')
{ alert("Lütfen Ad ve telefon kısımlarını doldurunuz")
return}
const newPerson={fullname:fullNameInput.value,
                 phone:phoneInput.value}
people.push(newPerson);
listPeopleFunc(people);
fullNameInput.value=''
phoneInput.value=''})


search.addEventListener("keyup",function(event)
{ var tempArray=people.filter((item)=>item.fullname.includes(event.target.value));
    listPeopleFunc(tempArray);});

function listPeopleFunc(parametre){
    listPeople.innerHTML='';
    if(parametre.length===0){listPeople.innerHTML="<p style='text-align:center;'>Gösterilecek kayıt yok</p>"
} else{   for( let i=0 ; i<parametre.length;i++ ){
    const div= document.createElement('div')
    div.classList.add('content')
    const h3=document.createElement('h3')
    h3.innerText=parametre[i].fullname
    const p=document.createElement('p')
    p.innerText=parametre[i].phone
    div.appendChild(h3)
    div.appendChild(p)
    listPeople.appendChild(div)
}}
  }
    

    