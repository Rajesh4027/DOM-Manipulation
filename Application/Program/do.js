let qty = document.getElementById('quantity')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let totalcount = document.getElementById('total')


let valuecount = 0;


qty.textContent = valuecount
plus.addEventListener('click',()=>{
    let add = ++valuecount;
    qty.textContent = valuecount
    totalcount.innerHTML = add*199+" &#8377"
})
        

minus.addEventListener('click',()=>{
    if(valuecount>0){
        let sub = --valuecount;
        qty.textContent = valuecount
        totalcount.innerHTML = sub*199+" &#8377" 
    }
})

    





