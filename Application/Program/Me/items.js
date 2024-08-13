let items_1 = {
    id:1,
    img:"https://static.vecteezy.com/system/resources/previews/027/501/843/original/a-cartoon-pizza-character-with-a-cute-face-vector.jpg",
    name:'Pizza',
    price:99,
    qty:1
}
let items_2 = {
    id:2,
    img:"https://thumbs.dreamstime.com/b/vector-illustration-idli-south-indian-main-breakfast-item-which-beautifully-arranged-plate-sambar-as-side-dish-221391642.jpg",
    name:'Idli',
    price:99,
    qty:1
}
let items_3= {
    id:3,
    img:"https://i.pinimg.com/736x/4d/98/eb/4d98eb338fa3db0471e47f59a30ef7af.jpg",
    name:'Dosa',
    price:99,
    qty:1
}
let items_4 = {
    id:4,
    img:"https://static.vecteezy.com/system/resources/previews/015/542/265/original/medu-vada-or-sambar-vada-illustration-vector.jpg",
    name:'Vada',
    price:30,
    qty:2
}
let items_5 = {
    id:5,
    img:"https://cdn.dribbble.com/users/2014642/screenshots/4783076/media/37056ec8ee08fdee803a14a5869c7eb7.jpg?resize=400x0",
    name:'Puri',
    price:30,
    qty:1
}


let items = [items_1,items_2,items_3,items_4,items_5];

function displayItems(products){
    if(products.length!=0){
        let eachProduct = ``

        
        for(let product of  products){
            eachProduct +=`<div class="col-md-3">
                <div class="card">
                    <div class="card-header">
                        <img src="${product.img}" alt="${product.name}" class="img-fluid">
                    </div>
                    <div class="card-body text-center">
                        <h5>${product.name}</h5>
                        <h6>${product.price}</h6>
                        <div class="div">
                            <i class="bi bi-dash-circle-fill" onclick="${product.id}"></i>
                            <span>${product.qty}</span>
                            <i class="bi bi-plus-circle-fill" id="change_btn" onclick="incQty(${product.id})" ></i>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.getElementById('item-list').innerHTML = eachProduct;
        
    }

}


displayItems(items)





function incQty(id){

    let arryfilter = items.map(function(item){
        if(item.id==id){
            let obj = {...item,qty:++item.qty}
            return obj
            
        }
        else{
            return item;
        }
        
        
    })

  displayItems(arryfilter)


    console.log(arryfilter);

    
}


function decQty(id){
   let  arryfilters = items.map(function(item){
        if(item.id==id && item.qty>1){
            return{...item,qty : item.qty -1}
        }
        else{
            return item
        }
    });
    displayItems(arryfilters)
}











