


let itemsObj = [
    {
        Id: '1.',
        Name: 'Pizza',
        Quantity: 0,
        Price: 199,
        TotalPrice: 0
    },
    {
        Id: '2.',
        Name: 'Burger',
        Quantity: 0,
        Price: 130,
        TotalPrice: 0
    }
]


const items = document.getElementById('items')



let collection = `<tr>
                <td>${itemsObj[0].Id}</td>
                <td>${itemsObj[0].Name}</td>
                <td><img width="50px" height="50px"
                        src="data:image/png;base64,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"
                        alt="not found"></td>
                <td>
                    <i class="bi bi-dash-circle" id="minus"}></i>
                    <span id="quantity"></span>
                    <i class="bi bi-plus-circle" id="plus"></i>
                </td>
                <td>
                    ${itemsObj[0].Price}
                </td>
                <td id="total">${itemsObj[0].TotalPrice} &#8377</td>
            </tr>
             `;

items.innerHTML = collection






