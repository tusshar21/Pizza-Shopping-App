//Glue bw view and model
//Controller UI I/O
import productOperations from "../services/product-operations.js";

async function loadPizzas(){
    const pizzas= await productOperations.loadProducts();
    console.log('Pizza are', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

function addToCart(){
    console.log('Add to Cart Called...', this);
    const currentButton=this;
    const pizzaId=currentButton.getAttribute('product-id');
    console.log('Pizza Id is ', pizzaId);
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket(){
    const cartProducts=productOperations.getProductsInCart();
    const basket= document.querySelector('#basket');
    basket.innerHTML='';
    for(let product of cartProducts){
        const li=document.createElement('li');
        li.innerText= `${product.name} ${product.price}`;
        basket.appendChild(li);
    }
}

function preparePizzaCard(pizza){
    const outputDiv= document.querySelector('#output');
    const columnDiv=document.createElement('div');
    columnDiv.className= 'col-4';
    outputDiv.appendChild(columnDiv);
    const cardDiv= document.createElement('div');
    cardDiv.className='card';
    cardDiv.style='width: 18rem;';
    columnDiv.appendChild(cardDiv);
    const img= document.createElement('img');
    img.src=pizza.url;
    img.className='card-img-top';    cardDiv.appendChild(img);
    const cardBody=document.createElement('div');
    cardBody.className='card-body';
    cardDiv.appendChild(cardBody);
    const h5= document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const pTag=document.createElement('p');
    pTag.className='card-text';
    pTag.innerText= pizza.desc;
    const button= document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener('click', addToCart)
    button.innerText='Add to Cart'
    button.className='btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);

}