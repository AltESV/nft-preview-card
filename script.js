let nft = {
  name: 'Equilibrium #3429',
  description: 'Our Equilibrium collection promotes balance and calm.',
  price: '0.541ETH',
  time: '3 days left',
  creator: 'test'
}

let name = document.getElementById('name');
let description = document.getElementById('description');
let price = document.getElementById('ether');
let time = document.getElementById('time');
let creator = document.getElementById('creator')

name.innerHTML = nft.name;
description.innerHTML = nft.description;
price.innerHTML = nft.price;
time.innerHTML = nft.time;
creator.innerHTML = nft.creator;


const image = document.getElementById('image1')

image.addEventListener("click", counter)

function counter() {
  console.log("clicked");
}