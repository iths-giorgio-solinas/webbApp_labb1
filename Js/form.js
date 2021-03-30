let uname=document.querySelector('#uname');
let umail=document.querySelector('#umail');
let adress=document.querySelector('#adress');
let nr=document.querySelector('#nr');
let postnr=document.querySelector('#postnr');
let phonenr=document.querySelector('#phonenr');
let form = document.querySelector('#buy');
let unameLabels=document.querySelectorAll('label[for=uname]');
let umailLabels= document.querySelectorAll('label[for=umail]')
let adressLabels= document.querySelectorAll('label[for=adress]')
let nrLabels=document.querySelectorAll('label[for=nr]');
let postnrLabels=document.querySelectorAll('label[for=postnr]');
let phonenrLabels= document.querySelectorAll('label[for=phonenr]');
let checkout= document.querySelector('#checkout')
form.addEventListener('submit', validate, false);

function validate(e){
    e.preventDefault();
    if(uname.value==""){
        uname.focus();
        changeColor(unameLabels);
        return false;
    }
    else{
        keepColor(unameLabels)
    }

    if(umail.value==""||!(/^\S+@\S+\.\S+$/.test(umail.value))){
        umail.focus();
        changeColor(umailLabels);
        return false;
    }
    else{
        keepColor(umailLabels)
    }

    if(adress.value==""){
        adress.focus();
        changeColor(adressLabels);
        return false;
    }
    else{
        keepColor(adressLabels);
    }

    if(nr.value==""||nr.length>3||/\D/.test(nr.value)){
        nr.focus();
        changeColor(nrLabels);
        return false;
    }
    else{
        keepColor(nrLabels)
    }

    if(postnr.value==""||postnr.value.length!=5||/\D/.test(postnr.value)){
        postnr.focus();
        changeColor(postnrLabels);
        return false;
    }
    else{
        keepColor(postnrLabels)
    }

    if(phonenr.value==""||phonenr.value.length!=10||/\D/.test(phonenr.value)){
        phonenr.focus();
        changeColor(phonenrLabels);
        return false;
    }
    else{
        keepColor(phonenrLabels)
    }
    localStorage.removeItem('order');
    cartItems.innerHTML="";
    display(uname.value,umail.value,adress.value,nr.value,postnr.value,phonenr.value);
    return true;
}


function changeColor(node){
    for(let element of node){
        element.style.color='red';
    }
}
function keepColor(node){
    for(let element of node){
        element.style.color='white';
    }
}
function display(name,email,adress,nr,postnr,phonenr){
    while(checkout.lastChild){
        checkout.removeChild(checkout.lastChild);
    }
    let p=document.createElement('p');
    p.innerHTML=`Congratulation ${name}. You have received a confirmation at ${email}.
    Your order will be sent at ${adress} ${nr} - ${postnr}.
    In case there is any problem we will write you to the email you provided or contact you at ${phonenr}`
    checkout.appendChild(p);
}