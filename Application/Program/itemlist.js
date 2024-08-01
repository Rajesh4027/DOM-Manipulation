


let itemsObj = 
    {
        Id: '1.',
        Name: 'Pizza',
        Image:'',
        Quantity: 0,
        Price: 199,
        TotalPrice: 0
    }
    // {
    //     Id: '2.',
    //     Name: 'Burger',
    //     Quantity: 0,
    //     Price: 130,
    //     TotalPrice: 0
    // }



const items = document.getElementById('items')



let collection = `<tr>
                <td>${itemsObj.Id}</td>
                <td>${itemsObj.Name}</td>
                <td><img  src="/Images/pizza.jpg" alt="notfound"></td>
                <td>
                    <i class="bi bi-dash-circle" id="minus"}></i>
                    <span id="quantity"></span>
                    <i class="bi bi-plus-circle" id="plus"></i>
                </td>
                <td>
                    ${itemsObj.Price}
                </td>
                <td id="total">${itemsObj.TotalPrice} &#8377</td>
            </tr>
             `;

items.innerHTML = collection




console.log(itemsObj.Image);



