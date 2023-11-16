let openShopping=document.querySelector('.shopping');
let closeShopping=document.querySelector('.closeShopping');
let list=document.querySelector('.list');
let listCard=document.querySelector('.listCard');
let body=document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products=[
    {
        id:1,
        name:'Ravva idli',
        image:'https://cdn3.foodviva.com/static-content/food-images/breakfast-recipes/rava-idli-recipe/rava-idli-recipe.jpg',
        Hotel:'Hotel-1',
        price:1230
    },
    {
        id:2,
        name:'Fried idli',
        image:'https://spicyindiankitchen.com/wp-content/uploads/2021/09/chili-masala-idli-1.jpg',
        Hotel:'Hotel-2',
        price:1130
    },
    {
        id:3,
        name:'Upma idli',
        image:'https://rakskitchen.net/wp-content/uploads/2015/02/16294029408_c8fe1a1841_z-500x375.jpg',
        Hotel:'Hotel-3',
        price:1240
    },
    {
        id:4,
        name:'Sambar idli',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYFIduqjiNv7gQQ0k0-5cykpw0DGiqB5Hdw&usqp=CAU',
        Hotel:'Hotel-4',
        price:2230
    },
    {
        id:5,
        name:'Chutney Idly',
        image:'https://www.spiceupthecurry.com/wp-content/uploads/2016/03/coconut-chutney-1.jpg',
        Hotel:'Hotel-5',
        price:1260
    },
    {
        id:6,
        name:'Mini Idly',
        image:'https://www.masalakorb.com/wp-content/uploads/2021/01/Tricolour-Idli-Recipe-Tiranga-Mini-Idli-V.jpg',
        Hotel:'Hotel-6',
        price:1530
    },
];
   
let listCards=[];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div');
         newDiv.classList.add('item');
         newDiv.innerHTML=
        `
        <img src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="title">${value.Hotel}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]=products[key];
        listCards[key].quantity=1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML='';
    let count=0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
        totalPrice=totalPrice+value.price;
        count =count+value.quantity;

        if(value!=null){
            let newDiv=document.createElement('li');
            newDiv.innerHTML=`
            <div><img src="${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.Hotel}</div>
            <div>
                <button onclick="changeQuantity(${key},${value.quantity -1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key},${value.quantity +1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText=totalPrice.toLocaleString();
    quantity.innerText=count;
}
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }else{
        listCards[key].quantity=quantity;
        listCards[key].price=quantity*products[key].price;
    }
    reloadCard();
}
