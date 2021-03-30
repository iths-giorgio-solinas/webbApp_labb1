let disk={Title:"",Cover:"",Price:0, Amount:0};
let cartImage = document.createElement('img');
fetch("Data/data.json").
then((res)=>(res.json())).
then((data)=>{
    let albums = document.querySelector('#albums');
    console.log(data)
    createSingleAlbum(data, albums);
    addToLocal(data);
    
});
function addToLocal(data) {
    let buy = document.querySelectorAll('.buy');
    for (let j = 0; j < buy.length; j++) {
        buy[j].addEventListener('click', (e) => {
            let counter=0;
            let newarray = [];
            disk.Title = data.disks[j].Title;
            disk.Cover = data.disks[j].CartImage;
            disk.Price = data.disks[j].Price;
            disk.Amount=++counter;
            if (localStorage.getItem('order') === null) {
                cartItems.innerHTML=counter;
                localStorage.setItem('order', JSON.stringify([disk]));
            }
            else {
                let found=false;
                let local = JSON.parse(localStorage.getItem('order'));
                newarray = local;
                console.log(local);
                let k=0;
                for(k; k<local.length;k++){
                    if (disk.Title==local[k].Title){
                        found=true;
                        break;
                    }
                }
                if(found){
                    disk.Amount=++local[j].Amount;
                    newarray.splice(k,1,disk);
                }
                else{
                    newarray.push(disk);
                }
                let sum=0;
                for (let item of newarray){
                    sum+=item.Amount;
                }
                cartItems.innerText=sum;
                localStorage.setItem('order', JSON.stringify(newarray));
            }
        });
    }
}

function createSingleAlbum(data, albums) {
    for (let album of data.disks) {
        let albumContainer = document.createElement('article');
        let left = document.createElement('section');
        let right = document.createElement('section');
        right.setAttribute('class', 'right-album');
        left.setAttribute('class', 'left-album');
        albums.appendChild(albumContainer);
        albumContainer.setAttribute('class', 'albumContainer');
        let image = document.createElement('img');
        image.src = album.Image;
        let title = document.createElement('h3');
        title.innerText = album.Title;
        let list = document.createElement('ol');
        for (let song of album.Songs) {
            let li = document.createElement('li');
            list.appendChild(li);
            li.innerText = song;
        }
        let datum = document.createElement('p');
        datum.innerText = `Realeased: ${album.ReleaseDate}`;
        let price = document.createElement('p');
        price.innerText= `${album.Price} kr`;
        let buy = document.createElement('button');
        buy.setAttribute("class", "buy");
        buy.innerHTML = 'Add to cart';
        left.append(title, image);
        right.append(list, datum, price, buy);
        albumContainer.append(left, right);
    }
}

