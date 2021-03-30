let customerOrder;
let sum=0;

if(localStorage.getItem('order')){
    customerOrder= JSON.parse(localStorage.getItem('order'));
}
for (let order of customerOrder){
    let section=document.createElement('section');
    section.setAttribute('class', 'order');
    let title = document.createElement('p');
    let img = document.createElement('img');
    let price = document.createElement('p');
    title.innerHTML=order.Title;
    img.src=order.Cover;
    price.innerHTML= order.Amount + " x " + order.Price;
    section.append(img,title,price)
    checkout.appendChild(section);
    sum=sum+(order.Price*order.Amount);
    console.log(sum);
}
let total = document.createElement('p');
total.innerHTML='<h3>TOTAL: </h3>'  + sum;
checkout.appendChild(total);
